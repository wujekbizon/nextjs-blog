'use server'
import { checkEmailExists, connectDatabase, insertDocument } from '@/helpers/db-utilis'
import { fromErrorToFormState, toFormState } from '@/helpers/fromErrorToFormState'
import { FormState } from '@/types/actionTypes'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

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
  let client

  const createEmailSchema = z.object({
    email: z.string().email({ message: 'Invalid email format' }),
  })

  // connecting to db
  try {
    client = await connectDatabase('blog')
  } catch (error) {
    return toFormState('ERROR', 'Error connecting to database, please try again later')
  }

  let result
  try {
    const { email } = createEmailSchema.parse({
      email: formData.get('email'),
    })

    // Check if email already exists in DB before continuing
    const isEmailUnique = await checkEmailExists(client, 'newsletters', email)

    if (!isEmailUnique) {
      return toFormState('ERROR', 'Email is already subscribed to the newsletter')
    }

    result = await insertDocument(client, 'newsletters', { email })
    console.log('Subscription successful:', result) // Log success for debugging
  } catch (error) {
    return fromErrorToFormState(error)
  } finally {
    // Close database connection if necessary
    if (client) {
      await client.close()
    }
  }
  revalidatePath('/')
  return toFormState('SUCCESS', 'Successfully subscribed to newsletter!')
}
