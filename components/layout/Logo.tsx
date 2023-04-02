import styles from './Logo.module.css'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image src="/images/site/logo.png" alt="wolfinger" width={120} height={40} />
    </div>
  )
}
export default Logo
