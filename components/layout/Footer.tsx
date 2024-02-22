import Link from 'next/link'
import Hero from '../home-page/Hero'
import styles from './Footer.module.css'

const subscribe = async (formData: FormData) => {
  'use server'
  console.log(formData.get('email') as string)
}

const Footer = () => {
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
        <form className={styles.form} action={subscribe}>
          <input
            placeholder="Enter your email address here"
            className={styles.input}
            type="text"
            name="email"
            id="email"
            required
          />
          <button className={styles.submit_btn}>Subscribe</button>
        </form>
      </div>
      {/* <Hero /> */}
    </footer>
  )
}
export default Footer
