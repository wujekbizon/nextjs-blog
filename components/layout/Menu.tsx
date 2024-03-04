import { links } from '@/constants/links'
import styles from './Menu.module.css'
import Link from 'next/link'
import ModalLink from '../ui/ModalLink'

const Menu = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <aside className={styles.modal}>
      <ul className={styles.list}>
        {links.map((item) => (
          <ModalLink key={item.title} {...item} onCloseHandler={closeMenu} />
        ))}
      </ul>
    </aside>
  )
}
export default Menu
