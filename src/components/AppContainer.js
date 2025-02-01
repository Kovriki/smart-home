import React from 'react';
import '../styles/AppContainer.css'; 

function AppContainer({ text, onClick, type = 'button', className = '' }) {
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

export default AppContainer;
