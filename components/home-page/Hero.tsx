'use client'

import styles from './Hero.module.css'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image src="/images/site/me3.jpg" alt="Grzegorz Wolfinger" width={250} height={250} />
      </div>
      <h1>Grzegorz Wolfinger</h1>
      <h3>Fullstack Developer</h3>
      <p>&quot;I blog about programming - especially React.js, Next.js and C++&quot;</p>
    </section>
  )
}
export default Hero
