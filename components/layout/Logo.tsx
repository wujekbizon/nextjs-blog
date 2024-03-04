import Link from 'next/link'
import styles from './Logo.module.css'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      <Image
        className={styles.logo_main}
        src="/assets/images/logo_blog.png"
        alt="wolfinger"
        width={150}
        height={80}
        priority
      />

      <Image
        className={styles.logo_mobile}
        src="/assets/images/logo_m.png"
        alt="wolfinger"
        width={150}
        height={80}
        priority
      />
    </Link>
  )
}
export default Logo
