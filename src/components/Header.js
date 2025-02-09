import React, { useState } from 'react';
import '../styles/Header.css';
import IconButton from './ButtonIcon';
import ModalPage from './ModalPage';

function Header({ title, pages }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header classname="topBar">
            <IconButton iconName={"alert"} onClick={toggleMenu} />
            <h1>{title}</h1>
            <IconButton iconName={"menu"} onClick={toggleMenu} />


            {isMenuOpen && (
                <ModalPage />
                // <nav classname="menu1">
                //     <ul>
                //         {pages.map((page, index) => (
                //             <li key={index}>
                //                 <a href={page.link}>{page.name}</a>
                //             </li>
                //         ))}
                //     </ul>
                // </nav>
            )}
        </header>
    );
}

export default Header;