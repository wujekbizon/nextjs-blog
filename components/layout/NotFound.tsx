import Image from 'next/image'
import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <Image className={styles.image} src="/assets/images/hero2.jpg" alt="coding" width={900} height={400} />
      <h2>This part of application is under construction or will never exist... </h2>
      <p>This project is made by Grzegorz Wolfinger | Next JS / React Developer</p>
    </div>
  )
}
export default NotFound
