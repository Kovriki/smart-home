import React, { useState } from 'react';
import '../styles/Menu.css';




const Menu = ({ pages }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header classname="header">
            <button className='menu-btn' onClick={toggleMenu}> ☰ Меню</button>

        {isMenuOpen && (
            <nav classname="menu">
                <ul>
                    {pages.map((page, index) => (
                        <li key={index}>
                            <a href={page.link}>{page.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        )}
        </header>
    )
}

export default Header;