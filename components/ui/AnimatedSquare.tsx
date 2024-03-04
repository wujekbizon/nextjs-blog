'use client'
import styles from './AnimatedSquare.module.css'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const AnimatedSquare = ({ children, duration }: { children: React.ReactNode; duration: number }) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const squareRef = useRef(null)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  // Animation configuration (adjustable parameters)
  const ANIMATION_DURATION = duration // Seconds

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

  useEffect(() => {
    const matchMedia = window.matchMedia('(max-width: 1024px)')

    const mediaMatchChangeHandler = () => {
      setIsSmallScreen(matchMedia.matches)
    }

    matchMedia.addListener(mediaMatchChangeHandler)

    mediaMatchChangeHandler() // Check on initial render

    return () => {
      matchMedia.removeListener(mediaMatchChangeHandler)
    }
  }, [])

  return (
    <div className={styles.pad_container} ref={containerRef}>
      {isSmallScreen ? (
        <div className={styles.pad}>
          <div className={styles.content}>{children}</div>
        </div>
      ) : (
        <motion.div
          ref={squareRef}
          className={styles.pad}
          animate={{
            x: ['5vw', '66vw', '5vw', '66vw', '5vw'],
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
      )}
    </div>
  )
}

export default AnimatedSquare
