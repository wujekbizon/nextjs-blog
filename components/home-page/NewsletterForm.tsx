'use client'

import styles from './NewsletterForm.module.css'
import { useEffect, useRef } from 'react'
import { subscribeToNewsletter } from '@/actions/actions'
import { useFormState } from 'react-dom'
import SubmitButton from '../ui/SubmitButton'
import FieldError from '../ui/FieldError'
import { MdAttachEmail } from 'react-icons/md'
import { EMPTY_FORM_STATE } from '@/constants/formState'
import { useToastMessage } from '@/hooks/useToastMessage'
import { useFormReset } from '@/hooks/useFormReset'

const NewsletterForm = () => {
  const [formState, action] = useFormState(subscribeToNewsletter, EMPTY_FORM_STATE)
  const formRef = useFormReset(formState)

  const noScriptFallback = useToastMessage(formState)

  return (
    <form className={styles.form} action={action} ref={formRef}>
      <div className={styles.inputs}>
        <label htmlFor="email">
          <MdAttachEmail color="#a89393" size={26} />
        </label>
        <input
          placeholder="Enter your email address here"
          className={styles.input}
          type="email"
          name="email"
          id="email"
        />
        <SubmitButton label="Subscribe" loading="Subscribing ..." />
      </div>
      <FieldError formState={formState} name="email" />
      {noScriptFallback}
    </form>
  )
}
export default NewsletterForm
