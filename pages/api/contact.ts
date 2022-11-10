import { NextApiRequest, NextApiResponse } from 'next';
import { connectDatabase, insertDocument } from '../../helpers/db-utilis';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    // server side validation
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input!' });
      return;
    }

    let client;

    try {
      client = await connectDatabase('blog');
    } catch (error) {
      res.status(500).json({ message: 'Connecting to database failed!' });
      return;
    }

    const messageContent = {
      email,
      name,
      message,
    };

    let result;
    try {
      result = await insertDocument(client, 'messages', messageContent);
      res
        .status(201)
        .json({ message: 'Added new contact', contact: messageContent });
    } catch (error) {
      res.status(500).json({ message: 'Inserting data failed!' });
      return;
    }
  }
};

export default handler;
