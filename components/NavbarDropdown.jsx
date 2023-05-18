import React from 'react'
import styles from '../styles/navbar/NavbarDropdown.module.css'
import Link from 'next/link'

const NavbarDropdown = ({dropdown}) => {
  return (
    <div className={styles.dropdown_menu}>
      {dropdown.map((value)=>(
        <Link href={`/categories/${value.toLowerCase()}`}><span>{value}</span></Link>
      ))}
    </div>
  )
}

export default NavbarDropdown