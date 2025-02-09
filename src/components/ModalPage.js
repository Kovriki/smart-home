import React from "react";
import ReactDOM from "react-dom";
import "../styles/ModalPage.css";

const ModalPage = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modalOverlay">
      <div className="modalContent">
        {children}
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>, document.body
  );
};

export default ModalPage;
