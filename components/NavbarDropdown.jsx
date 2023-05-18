import React from 'react'
import styles from '../styles/navbar/NavbarDropdown.module.css'
import Link from 'next/link'

const NavbarDropdown = () => {
  return (
    <div className={styles.dropdown_menu}>
        <Link href='/'><span>Link</span></Link>
        <Link href='/'><span>Link</span></Link>
        <Link href='/'><span>Link</span></Link>
    </div>
  )
}

export default NavbarDropdown