import { MongoClient } from 'mongodb'

export type ContactDocument = {
  email: string
  name: string
  message: string
}

export const connectDatabase = async (dbName: string) => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.knuso.mongodb.net/${dbName}?retryWrites=true&w=majority`
  )
  return client
}

export const insertDocument = async (client: MongoClient, collection: string, document: ContactDocument) => {
  const db = client.db()
  const result = await db.collection(collection).insertOne(document)
  return result
}
