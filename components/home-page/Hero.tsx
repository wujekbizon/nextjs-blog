'use client'

import styles from './Hero.module.css'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image src="/images/site/me3.jpg" alt="Grzegorz Wolfinger" width={450} height={450} />
      </div>
      <h1 className="gradient__text">Grzegorz Wolfinger</h1>
      <h3>React Developer | Junior Web Developer | JavaScript Engineer</h3>
      <p>&quot;I blog about programming - especially React.js, Next.js and Typescript&quot;</p>
    </section>
  )
}
export default Hero
