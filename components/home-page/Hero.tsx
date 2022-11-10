import styles from './Hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/me.jpg"
          alt="Grzegorz Wolfinger"
          width={300}
          height={300}
        />
      </div>
      <h1 className="gradient__text">Grzegorz Wolfinger</h1>
      <h3>React Developer | Junior Web Developer | JavaScript Engineer</h3>
      <p>
        "I blog about programming - especially React.js, Next.js and Typescript"
      </p>
    </section>
  );
};
export default Hero;
