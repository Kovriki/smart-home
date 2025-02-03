import React from 'react';
import { useState } from 'react';
import { motion } from "framer-motion";
import '../styles/DeviceCard.css';

function DeviceCard()  {

    const [isButtonActive, setIsButtonActive] = useState(false);
    const [isCardModalOpen, setIsCardModalOpen] = useState(false);
    const [isButtonModalOpen, setIsButtonModalOpen] = useState(false);

    let holdTimer;

    const handleClick = () => {
        setIsButtonActive((prev) => !prev);
    };


    const handleMouseDown = () => {
        holdTimer = setTimeout(() => {
            setIsCardModalOpen(true);
        }, 600);
    };


    const handleMouseUp = () => {
        clearTimeout(holdTimer);
    };

    return(
        <div className='relative'>
            <motion.div        
                className="card"
                onClick={handleClick}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchEnd={handleMouseUp}>

                <p>Light</p>

                {/* <Button title={"Click"} onClick={handleClick} /> */}

                {/* Кнопка внутри карточки */}
                <button
                className={`inner-button ${isButtonActive ? "active" : ""}`}
                onClick={(e) => {
                    e.stopPropagation();
                    setIsButtonModalOpen(true);
                }}
                ></button>

            </motion.div>

            {/* Модальное окно по удержанию карточки */}
            {isCardModalOpen && (
                <div className="modal">
                <p>Модальное окно карточки</p>
                <button onClick={() => setIsCardModalOpen(false)}>Закрыть</button>
                </div>
            )}



            {/* Модальное окно кнопки */}
            {isButtonModalOpen && (
                <div className="modal">
                <p>Модальное окно кнопки</p>
                <button onClick={() => setIsButtonModalOpen(false)}>Закрыть</button>
                </div>
            )}
        </div>
    );

}

export default DeviceCard;