import { SOCIAL_LINKS } from '@/constants/socials'
import styles from './FooterSocials.module.css'
import Link from 'next/link'

const FooterSocials = () => {
  return (
    <div className={styles.socials}>
      <p>
        ©2024 Design by <span>WESA</span>
      </p>
      <div className={styles.wrapper}>
        {SOCIAL_LINKS.map(({ icon, id, url }) => (
          <Link className={styles.social} key={id} href={url}>
            {icon}
          </Link>
        ))}
      </div>
    </div>
  )
}
export default FooterSocials
