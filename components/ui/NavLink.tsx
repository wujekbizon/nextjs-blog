import styles from './NavLink.module.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type NavLinkProps = {
  children: React.ReactNode
  href: string
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const path = usePathname()

  return (
    <li>
      <Link href={href} className={path === href ? `${styles.link} ${styles.active}` : styles.link}>
        {children}
      </Link>
    </li>
  )
}
export default NavLink
