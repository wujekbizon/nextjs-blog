import styles from './ContactForm.module.css'
import { sendEmail } from '@/actions/actions'

const ContactForm = () => {
  return (
    <section className={styles.contact}>
      <h1>Contact Me</h1>
      <form className={styles.form} action={sendEmail}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea name="message" id="message" rows={5} required></textarea>
        </div>
        <div className={styles.actions}>
          <button>Send Meassage</button>
        </div>
      </form>
    </section>
  )
}
export default ContactForm
