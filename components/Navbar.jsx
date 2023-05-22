import React, { useEffect, useState } from 'react'
import styles from '../styles/navbar/Navbar.module.css'
import Link from 'next/link'
import NavbarDropdown from './NavbarDropdown';

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [search, setSearch] = useState(false)
    const categories = ['Business', 'Technology', 'Crypto', 'Development', 'Marketing']
    const faqs = ['FAQ1', 'FAQ2']

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

    const [dropdowns, setDropdowns] = useState([
        { id: 1, isOpen: false },
        { id: 2, isOpen: false },
        { id: 3, isOpen: false },
        // Add more objects for additional dropdowns
    ]);

    const handleDropdown = (dropdownId) => {
        setDropdowns((prevState) =>
            prevState.map((dropdown) =>
                dropdown.id === dropdownId ? { ...dropdown, isOpen: true } : dropdown
            )
        );
    };

    const handleMouseOut = (dropdownId) => {
        setDropdowns((prevState) =>
            prevState.map((dropdown) =>
                dropdown.id === dropdownId ? { ...dropdown, isOpen: false } : dropdown
            )
        );
    };

    const handleDropdownToggle = (dropdownId) => {
        setDropdowns((prevState) =>
            prevState.map((dropdown) =>
                dropdown.id === dropdownId
                    ? { ...dropdown, isOpen: !dropdown.isOpen }
                    : dropdown
            )
        );
    };

    const handleSearch = () => {
        setSearch(!search)
    }
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
                        <div onMouseOver={() => handleDropdown(1)} onMouseOut={() => handleMouseOut(1)} className={styles.dropdown}><span>Categories</span>
                            {dropdowns[0].isOpen ? <NavbarDropdown path={'categories'} dropdown={categories} /> : null}</div>
                        <Link href='/'><span>About</span></Link>
                        <Link href='/'><span>Privacy</span></Link>
                        <Link href='/'><span>Business</span></Link>
                        <div onMouseOver={() => handleDropdown(2)} onMouseOut={() => handleMouseOut(2)} className={styles.dropdown}><span>FAQs</span>
                            {dropdowns[1].isOpen ? <NavbarDropdown path={'faqs'} dropdown={faqs} /> : null}</div>
                    </div>
                    <div className={styles.mobile_menu} style={mobileMenu ? { left: 0 } : {}}>
                        <div className={styles.mobile_navlinks} >
                            <button className={styles.close_button} onClick={handleMobileMenu}>
                                <img src="/icons/close.svg" alt="close" />
                            </button>
                            <div
                                onClick={() => handleDropdownToggle(1)}
                                className={styles.mobile_dropdown}
                            >
                                <span>Categories {dropdowns[0].isOpen ? <img src='/icons/arrow_up.svg' /> : <img src='/icons/arrow_down.svg' />}</span>

                                {dropdowns[0].isOpen ?
                                    <div className={styles.mobile_dropdown_links}>
                                        {categories.map((category, index) => (
                                            <Link key={index} href={`/categories/${category.toLowerCase()}`} onClick={handleMobileMenu}>
                                                <span>{category}</span>
                                            </Link>
                                        ))}
                                    </div>
                                    : ''
                                }
                            </div>
                            <Link href='/' onClick={handleMobileMenu}><span>About</span></Link>
                            <Link href='/' onClick={handleMobileMenu}><span>Privacy</span></Link>
                            <Link href='/' onClick={handleMobileMenu}><span>Business</span></Link>
                            <Link href='/' onClick={handleMobileMenu}><span>FAQs</span></Link>
                        </div>
                    </div>


                    <div className={styles.navbar_search}>
                        <p><img src="/icons/search.svg" alt="search" /></p>
                        <input type="text" placeholder='search' />
                    </div>

                    <div className={styles.navbar_search_mobile}>
                        <button onClick={handleSearch}>
                            <img src="/icons/search.svg" alt="search" />
                        </button>
                        {search ? <div className={styles.mobile_search_area}>
                            <input type="text" placeholder='search' />
                        </div> : ''}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar