import styles from './Menu.module.css'
import Link from 'next/link'

const Menu = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <ul className={styles.list}>
      <li onClick={() => closeMenu()}>
        <Link href="/">Home</Link>
      </li>
      <li onClick={() => closeMenu()}>
        <Link href="/posts">Posts</Link>
      </li>
      <li onClick={() => closeMenu()}>
        <Link href="/contact">Contact</Link>
      </li>
      <li onClick={() => closeMenu()}>
        <Link href="https://g-w.vercel.app/" target="_blank">
          Portfolio
        </Link>
      </li>
    </ul>
  )
}
export default Menu
