'use client'

import styles from './MainNavigation.module.css'
import Logo from './Logo'
import Link from 'next/link'
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
            <NavLink key={item.title} href={item.href}>
              {item.title}
            </NavLink>
          ))}
        </ul>
      </nav>
      <aside className={styles.navbar_btn}>
        <button onClick={handleToggle}>
          {navbarOpen ? <MdClose className={styles.mdclose} /> : <FiMenu className={styles.fimenu} />}
        </button>

        {navbarOpen && (
          <div className="navbar_menu_container scale-up-center">
            <Menu closeMenu={closeMenu} />
          </div>
        )}
      </aside>
    </header>
  )
}
export default MainNavigation
