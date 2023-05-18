import React, { useEffect, useState } from 'react'
import styles from '../styles/navbar/Navbar.module.css'
import Link from 'next/link'
import NavbarDropdown from './NavbarDropdown';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsSticky(scrollTop > 40);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMobileMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    const handleDropdown = () => {
        setDropdown(true);
      };
    
      const handleMouseOut = () => {
        setDropdown(false);
      };
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_box__1nb}>
                <div className={styles.navbar_container}>
                    <a href="/" className={styles.brand}><img src="/unbytech_logo.png" alt="Unbytech logo" /></a>
                    <div className={styles.socials}>
                        <a href="/">
                            <img src="/icons/twitter.svg" alt="twitter" />
                        </a>
                        <a href="/">
                            <img src="/icons/pinterest.svg" alt="pinterest" />
                        </a>
                        <a href="/">
                            <img src="/icons/instagram.svg" alt="instagram" />
                        </a>
                    </div>
                </div>
            </div>
            <div className={`${styles.navbar_box__2nb} ${isSticky ? styles.sticky : ''}`}>
                <div className={styles.navbar_container}>
                    <button className={styles.menu_button} onClick={handleMobileMenu}>
                        <img src="/icons/navbar_menu.svg" alt="menu" />
                    </button>
                    <div className={styles.navbar_navlinks}>
                        <div onMouseOver={handleDropdown} onMouseOut={handleMouseOut} className={styles.dropdown}><span>Categories</span>
                        {dropdown ? <NavbarDropdown/> : ''}</div>
                        <Link href='/'><span>About</span></Link>
                        <Link href='/'><span>Privacy</span></Link>
                        <Link href='/'><span>Business</span></Link>
                        <Link href='/'><span>FAQs</span></Link>
                    </div>
                    <div className={styles.mobile_menu} style={mobileMenu ? { left: 0 } : {}}>
                        <div className={styles.mobile_navlinks} >
                            <button className={styles.close_button} onClick={handleMobileMenu}>
                                <img src="/icons/close.svg" alt="close" />
                            </button>
                            <Link href='/' onClick={handleMobileMenu}><span>Categories</span></Link>
                            <Link href='/' onClick={handleMobileMenu}><span>About</span></Link>
                            <Link href='/' onClick={handleMobileMenu}><span>Privacy</span></Link>
                            <Link href='/' onClick={handleMobileMenu}><span>Business</span></Link>
                            <Link href='/' onClick={handleMobileMenu}><span>FAQs</span></Link>
                        </div>
                    </div>


                    <div className={styles.navbar_search}>
                        <a href="/">
                            <img src="/icons/search.svg" alt="search" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar