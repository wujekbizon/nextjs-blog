import AnimatedSquare from '../ui/AnimatedSquare'
import styles from './Explore.module.css'

const Explore = () => {
  return (
    <section className={styles.explore}>
      <h1 className={styles.explore_title}>Check what's coming in near future!</h1>
      <AnimatedSquare>
        <h1>Animation - Framer Motion - CSS</h1>
        <p>
          Bring your designs to life with Framer's fluid animations and CSS's powerful styling, crafting experiences as
          dynamic as they are beautiful.
        </p>
        <p>New Series Articles, Coming Soon!</p>
      </AnimatedSquare>
    </section>
  )
}
export default Explore
