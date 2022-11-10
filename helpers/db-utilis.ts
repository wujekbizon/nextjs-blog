import { MongoClient } from 'mongodb';

type InsertedDocument<T> = {
  [key: string]: T;
};

type ContactDocument = {
  email: string;
  name: string;
  message: string;
};

export const connectDatabase = async (dbName: string) => {
  const client = await MongoClient.connect(
    `mongodb+srv://grzegorz:Od4W7qH3Ec6DwzlF@cluster0.knuso.mongodb.net/${dbName}?retryWrites=true&w=majority`
  );
  return client;
};

export const insertDocument = async (
  client: MongoClient,
  collection: string,
  document: InsertedDocument<ContactDocument>
) => {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
};
