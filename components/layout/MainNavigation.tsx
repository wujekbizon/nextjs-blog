import styles from './MainNavigation.module.css'
import Logo from './Logo'
import Link from 'next/link'
import { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'
import Menu from './Menu'

const MainNavigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
    <header className={styles.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="https://grzegorz-wolfinger-portfolio.vercel.app/" target="_blank">
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.navbar_btn}>
        <button onClick={handleToggle}>
          {navbarOpen ? <MdClose className={styles.mdclose} /> : <FiMenu className={styles.fimenu} />}
        </button>

        {navbarOpen && (
          <div className="navbar_menu_container scale-up-center">
            <Menu closeMenu={closeMenu} />
          </div>
        )}
      </div>
    </header>
  )
}
export default MainNavigation
