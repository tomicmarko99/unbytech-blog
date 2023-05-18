import React from 'react'
import styles from '../styles/navbar/NavbarDropdown.module.css'
import Link from 'next/link'

const NavbarDropdown = ({dropdown, path}) => {
  return (
    <div className={styles.dropdown_menu}>
      {dropdown.map((value)=>(
        <Link key={value} href={`/${path}/${value.toLowerCase()}`}><span>{value}</span></Link>
      ))}
    </div>
  )
}

export default NavbarDropdown