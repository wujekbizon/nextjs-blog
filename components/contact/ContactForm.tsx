'use client'

import { useFormState } from 'react-dom'
import styles from './ContactForm.module.css'
import { sendEmail } from '@/actions/actions'
import { EMPTY_FORM_STATE } from '@/constants/formState'
import { useFormReset } from '@/hooks/useFormReset'
import { useToastMessage } from '@/hooks/useToastMessage'
import FieldError from '../ui/FieldError'
import SubmitButton from '../ui/SubmitButton'

const ContactForm = () => {
  const [formState, action] = useFormState(sendEmail, EMPTY_FORM_STATE)
  const formRef = useFormReset(formState)

  const noScriptFallback = useToastMessage(formState)

  return (
    <section className={styles.contact}>
      <form className={styles.form} action={action} ref={formRef}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" />
            <FieldError formState={formState} name="email" />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" />
            <FieldError formState={formState} name="name" />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea placeholder="" name="message" id="message" rows={5}></textarea>
          <FieldError formState={formState} name="message" />
        </div>
        <div className={styles.actions}>
          <SubmitButton label="Send" loading="Sending ..." />
        </div>
        {noScriptFallback}
      </form>
    </section>
  )
}
export default ContactForm
