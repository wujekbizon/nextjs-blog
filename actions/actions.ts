'use server'
import { checkEmailExists, connectDatabase, insertDocument } from '@/helpers/db-utilis'
import { fromErrorToFormState, toFormState } from '@/helpers/fromErrorToFormState'
import { FormState } from '@/types/actionTypes'
import * as Sentry from '@sentry/nextjs'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

function isInvalidText(text: string | null): boolean {
  return !text || text.trim() === ''
}

export async function sendEmail(formData: FormData) {
  let client

  const messageContent = {
    email: formData.get('email') as string,
    name: formData.get('name') as string,
    message: formData.get('message') as string,
  }

  if (
    !messageContent.email ||
    !messageContent.email.includes('@') ||
    isInvalidText(messageContent.name) ||
    isInvalidText(messageContent.message)
  ) {
    Sentry.captureMessage('Invalid input fields!')
    throw new Error('Invalid input fields!')
  }

  try {
    client = await connectDatabase('blog')
  } catch (error) {
    Sentry.captureException(error)
    throw new Error('Error connecting to database, please try again later')
  } finally {
    // Close database connection
    if (client) {
      await client.close()
    }
  }

  let result
  try {
    result = await insertDocument(client, 'messages', messageContent)
    console.log('You successfully send a meassage:', result) // Log success for debugging
  } catch (error) {
    Sentry.captureException(error)
    throw new Error('Error sending a message')
  } finally {
    // Close database connection if necessary
    if (client) {
      await client.close()
    }
  }

  return { message: 'Successfully send a message!' }
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
    Sentry.captureException(error)
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
    Sentry.captureException(error)
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
