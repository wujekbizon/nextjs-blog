'use server'
import { connectDatabase, insertDocument } from '@/helpers/db-utilis'

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
    throw new Error('Invalid input fields!')
  }

  try {
    client = await connectDatabase('blog')
  } catch (error) {
    console.log(error)
    return
  }

  let result
  try {
    result = await insertDocument(client, 'messages', messageContent)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}
