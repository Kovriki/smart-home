import React from 'react';
import '../styles/ButtonDevice.css'; 

function ButtonDevice({ text, onClick, type = 'button', className = 'card' }) {
    return (
        <button
            type={type}
            className={`btn ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default ButtonDevice;
