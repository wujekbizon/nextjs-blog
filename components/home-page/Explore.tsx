'use client'

import AnimatedSquare from '../ui/AnimatedSquare'
import styles from './Explore.module.css'
import { motion } from 'framer-motion'

const Explore = () => {
  return (
    <section className={styles.explore}>
      <div className={styles.wrapper}>
        <h1 className={styles.explore_title}>
          <motion.div
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="gradient-divider"
          ></motion.div>
          <motion.div className="gradient-divider"></motion.div>
          <motion.div
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className={`${styles.custom_margin} gradient-divider`}
          ></motion.div>
          Check whats coming in near future!
        </h1>
      </div>
      <AnimatedSquare duration={50}>
        <h1>Animation - Framer Motion - CSS</h1>
        <p>
          Bring your designs to life with Framer fluid animations and CSS powerful styling, crafting experiences as
          dynamic as they are beautiful.
        </p>
        <p>New Series Articles, Coming Soon!</p>
      </AnimatedSquare>
    </section>
  )
}
export default Explore
