import styles from './ContactHero.module.css'

const ContactHero = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.title}>
        <h1>
          Greg&apos;s Blog <span>✍️</span>{' '}
        </h1>
        <p>
          I am passionate about shaping the future of web development and leveraging the power of peer-to-peer networks
          and artificial intelligence in today's applications.
        </p>
        <p>
          Welcome to my blog! I&apos;m excited to share with you the latest technologies I&apos;m using, the cool things
          I&apos;ve made, and anything else that may help others. If you have any questions or would like to share your
          story, please don't hesitate to reach out. I look forward to hearing from you!
        </p>
      </div>
    </section>
  )
}
export default ContactHero
