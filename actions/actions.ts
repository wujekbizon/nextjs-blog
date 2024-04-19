'use server'
import { checkEmailExists, connectDatabase, insertDocument } from '@/helpers/db-utilis'
import { fromErrorToFormState, toFormState } from '@/helpers/fromErrorToFormState'
import { FormState } from '@/types/actionTypes'
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import * as Sentry from '@sentry/nextjs'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { createHash } from 'crypto'
import { AWS_REGION, NEWSLETTER_BUCKET_ROOT } from '@/constants/awsData'

export async function sendEmail(formState: FormState, formData: FormData) {
  let client

  const createMessageSchema = z.object({
    email: z.string().email({ message: 'Invalid email format' }),
    name: z
      .string()
      .min(1, { message: 'Name field cannot be empty' })
      .max(191, { message: 'The length cannot be longer than 191 characters' }),
    message: z
      .string()
      .min(1, { message: 'Message field cannot be empty' })
      .max(350, { message: 'The length cannot be longer than 350 characters' }),
  })

  // connecting to db
  try {
    client = await connectDatabase('blog')
  } catch (error) {
    Sentry.captureException(error)
    return toFormState('ERROR', 'Error connecting to database, please try again later')
  }

  let result
  try {
    const messageContent = createMessageSchema.parse({
      email: formData.get('email'),
      name: formData.get('name'),
      message: formData.get('message'),
    })

    result = await insertDocument(client, 'messages', messageContent)
    console.log('You successfully send a meassage:', result) // Log success for debugging
  } catch (error) {
    Sentry.captureException(error)
    return fromErrorToFormState(error)
  } finally {
    // Close database connection if necessary
    if (client) {
      await client.close()
    }
  }

  revalidatePath('/')
  return toFormState('SUCCESS', 'Successfully send a message!')
}

export async function subscribeToNewsletter(formState: FormState, formData: FormData) {
  //S3 Config
  const s3Config = {
    bucketName: NEWSLETTER_BUCKET_ROOT,
    region: AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ID as string,
  }
  let client

  const createEmailSchema = z.object({
    email: z.string().email({ message: 'Invalid email format' }),
  })

  // connecting to db
  // try {
  //   // client = await connectDatabase('blog')
  // } catch (error) {
  //   Sentry.captureException(error)
  //   return toFormState('ERROR', 'Error connecting to database, please try again later')
  // }

  // let result
  try {
    const { email } = createEmailSchema.parse({
      email: formData.get('email'),
    })

    // Generate a unique ID based on a secure hash
    const uniqueId = createHash('sha256').update(email).digest('hex')

    const data = JSON.stringify({ email, id: uniqueId })

    const s3 = new S3Client({
      ...s3Config,
    })

    const params = {
      Bucket: s3Config?.bucketName,
      Key: `${uniqueId}.json`,
      Body: data,
      ContentType: 'application/json',
    }
    // Check if email already exists in DB before continuing
    // const isEmailUnique = await checkEmailExists(client, 'newsletters', email)

    // if (!isEmailUnique) {
    //   return toFormState('ERROR', 'Email is already subscribed to the newsletter')
    // }
    const result = await s3.send(new PutObjectCommand(params))
    // result = await insertDocument(client, 'newsletters', { email })
    console.log('Subscription successful:', result) // Log success for debugging
  } catch (error) {
    // Sentry.captureException(error)
    return fromErrorToFormState(error)
  } finally {
    // Close database connection if necessary
    // if (client) {
    //   await client.close()
    // }
  }
  revalidatePath('/')
  return toFormState('SUCCESS', 'Successfully subscribed to newsletter!')
}
