'use client'

import Link from 'next/link'
import Hero from '../home-page/Hero'
import styles from './Footer.module.css'
import { subscribeToNewsletter } from '@/actions/actions'
import { useFormStatus } from 'react-dom'
import SubmitButton from '../ui/SubmitButton'

const Footer = () => {
  const { pending } = useFormStatus()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_title}>
          <h2>Join 1,000+ Subscribers</h2>
          <p>
            Get exclusive access to all WESA HUB news and articles. Your email is safe with us.
            <Link className={styles.link} href="/">
              {' '}
              See our Privacy Policy
            </Link>
          </p>
        </div>
        <form className={styles.form} action={subscribeToNewsletter}>
          <input
            placeholder="Enter your email address here"
            className={styles.input}
            type="text"
            name="email"
            id="email"
            required
          />
          <SubmitButton label="Subscribe" loading="Subscribing ..." />
        </form>
      </div>
      {/* <Hero /> */}
    </footer>
  )
}
export default Footer
