'use client'

import styles from './MainNavigation.module.css'
import Logo from './Logo'
import { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'
import Menu from './Menu'
import { links } from '@/constants/links'
import NavLink from '../ui/NavLink'

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
      <div className={`${styles.navbar_gradient} gradient_1`}></div>
      <Logo />
      <nav>
        <ul className={styles.links}>
          {links.map((item) => (
            <NavLink {...item} key={item.title} />
          ))}
        </ul>
      </nav>
      <aside className={styles.navbar_btn}>
        <button onClick={handleToggle}>
          {navbarOpen ? <MdClose className={styles.mdclose} /> : <FiMenu className={styles.fimenu} />}
        </button>

        {navbarOpen && (
          <div className="scale-up-center">
            <Menu closeMenu={closeMenu} />
          </div>
        )}
      </aside>
    </header>
  )
}
export default MainNavigation
