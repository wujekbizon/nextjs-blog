import styles from './ContactForm.module.css';
import { useState } from 'react';

type ContactDetails = {
  email: string;
  name: string;
  message: string;
};

const sendContactData = async (contactDetails: ContactDetails) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }
};

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [error, setError] = useState(false);

  const sendMessageHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (
      !enteredEmail ||
      !enteredEmail.includes('@') ||
      enteredEmail.trim() === '' ||
      !enteredName ||
      enteredName.trim() === '' ||
      !enteredMessage ||
      enteredMessage.trim() === ''
    ) {
      console.log('Invalid Inputs');
      return;
    }

    const message = {
      email: enteredEmail,
      name: enteredName,
      message: enteredMessage,
    };

    try {
      await sendContactData(message);
      setEnteredEmail('');
      setEnteredName('');
      setEnteredMessage('');
    } catch (error) {
      if (error instanceof Error) {
        setError(true);
        console.log(error.message);
      } else {
        throw new Error('Something went wrong');
      }
    }
  };

  return (
    <section className={styles.contact}>
      <h1 className="gradient__text">How can I help you ?</h1>
      <form className={styles.form} onSubmit={sendMessageHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Send Meassage</button>
        </div>
      </form>
    </section>
  );
};
export default ContactForm;
