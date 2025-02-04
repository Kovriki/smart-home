import React from "react";
import "../styles/ButtonIcon.css";
import Icon from "./Icon";

function IconButton({ iconName, onClick, type = "button" }) {
    return (
        <button type={type} onClick={onClick} className="iconButton">
            {iconName && <Icon name={iconName} />}
        </button>
    );
}

export default IconButton;
