import { links } from '@/constants/links'
import styles from './Menu.module.css'
import Link from 'next/link'

const Menu = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <aside className={styles.modal}>
      <ul className={styles.list}>
        {links.map((item) => (
          <li key={item.title} onClick={() => closeMenu()}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
export default Menu
