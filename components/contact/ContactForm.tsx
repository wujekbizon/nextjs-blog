'use client'

import styles from './ContactForm.module.css'
import { useState, useContext } from 'react'
import NotificationContext from '../../store/notificationContext'

type ContactDetails = {
  email: string
  name: string
  message: string
}

const sendContactData = async (contactDetails: ContactDetails) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-type': 'application/json',
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message)
  }
}

const ContactForm = () => {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredName, setEnteredName] = useState('')
  const [enteredMessage, setEnteredMessage] = useState('')

  const notificationCtx = useContext(NotificationContext)

  const sendMessageHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (
      !enteredEmail ||
      !enteredEmail.includes('@') ||
      enteredEmail.trim() === '' ||
      !enteredName ||
      enteredName.trim() === '' ||
      !enteredMessage ||
      enteredMessage.trim() === ''
    ) {
      notificationCtx.showNotification({
        title: 'Error!',
        message: 'Invalid Input!',
        status: 'error',
      })
      return
    }

    const message = {
      email: enteredEmail,
      name: enteredName,
      message: enteredMessage,
    }

    notificationCtx.showNotification({
      title: 'Sending...',
      message: 'Your message is currently being added.',
      status: 'pending',
    })

    try {
      await sendContactData(message)
      notificationCtx.showNotification({
        title: 'Success!',
        message: 'Successfully send a message!',
        status: 'success',
      })
      setEnteredEmail('')
      setEnteredName('')
      setEnteredMessage('')
    } catch (error) {
      if (error instanceof Error) {
        notificationCtx.showNotification({
          title: 'Error!',
          message: error.message || 'Something went wrong!',
          status: 'error',
        })
      } else {
        throw new Error('Something went wrong')
      }
    }
  }

  return (
    <section className={styles.contact}>
      <h1>Contact Me</h1>
      <form className={styles.form} onSubmit={sendMessageHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" value={enteredEmail} onChange={(e) => setEnteredEmail(e.target.value)} />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" value={enteredName} onChange={(e) => setEnteredName(e.target.value)} />
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
  )
}
export default ContactForm
