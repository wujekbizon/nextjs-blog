import styles from './NavLink.module.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { NavLinkProps } from '@/types/linksTypes'

const NavLink: React.FC<NavLinkProps> = ({ href, title, icon }) => {
  const path = usePathname()

  return (
    <li className={path === href ? `${styles.link} ${styles.active}` : styles.link}>
      {icon}
      <Link href={href}>
        {title}
        {path === href && <div className="underline"></div>}
      </Link>
    </li>
  )
}
export default NavLink
