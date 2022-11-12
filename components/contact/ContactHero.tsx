import styles from './ContactHero.module.css';

const ContactHero = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.title}>
        <h1>
          Greg&apos; Blog <span>✍️</span>{' '}
        </h1>
        <p>
          I share anything that may help others, technologies I&apos;m using and
          cool things I&apos;ve made.
        </p>
        <p>
          If you have any questions or you want to share your story , let me
          know by sending a message.
        </p>
      </div>
    </section>
  );
};
export default ContactHero;
