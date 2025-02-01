// import React from 'react';
import React, { useState } from 'react';
import '../styles/Header.css';

// function Header ({ text, onClick }) {
// }
// export default Header;


const Header = ({ title, pages }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header classname="header">
            <h1>{title}</h1>
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