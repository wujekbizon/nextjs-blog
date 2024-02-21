'use client'
import styles from './AnimatedSquare.module.css'
import { useRef } from 'react'
import { motion } from 'framer-motion'

const AnimatedSquare = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const squareRef = useRef(null)

  // Animation configuration (adjustable parameters)
  const ANIMATION_DURATION = 50 // Seconds

  const CUSTOM_SHADOWS = [
    '0px 0px 4px  rgba(7, 7, 12, 1)',
    '0px 0px 6px  rgba(62, 0, 0, 1)',
    '0px 0px 8px  rgba(255, 68, 18, 0.5)',
    '0px 0px 50px  rgba(242, 245, 62, 0.5)',
    '0px 0px 10px  rgba(235, 157, 56, 0.5)',
    '0px 0px 8px  rgba(255, 68, 18, 0.5)',
    '0px 0px 6px  rgba(62, 0, 0, 1) ',
    '0px 0px 4px  rgba(7, 7, 12, 1)',
  ]

  const BORDER_RADIUS = [2, 25, 50, 500, 50, 25, 10, 2]

  return (
    <div className={styles.pad_container} ref={containerRef}>
      <motion.div
        ref={squareRef}
        className={styles.pad}
        animate={{
          x: ['2vw', '66vw', '2vw', '66vw', '2vw'],
          height: [500, 500, 500, 300, 500],
          borderRadius: BORDER_RADIUS,
          boxShadow: CUSTOM_SHADOWS,
        }}
        transition={{
          duration: ANIMATION_DURATION,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        <div className={styles.content}>{children}</div>
      </motion.div>
    </div>
  )
}

export default AnimatedSquare
