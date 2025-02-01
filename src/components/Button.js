import React from 'react';
import '../styles/Button.css'; 

function Button({ text, onClick, type = 'button', className = '' }) {
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

export default Button;
