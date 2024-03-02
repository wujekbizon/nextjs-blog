import Link from 'next/link'
import Hero from '../home-page/Hero'
import styles from './Footer.module.css'
import NewsletterForm from '../home-page/NewsletterForm'

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
        <NewsletterForm />
      </div>
      {/* <Hero /> */}
    </footer>
  )
}
export default Footer
