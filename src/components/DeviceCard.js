import React from 'react';
import cn from 'classnames';
import { useState } from 'react';
import { motion } from "framer-motion";
import '../styles/DeviceCard.css';
import IconButton from './ButtonIcon';

function DeviceCard({deviceName, size})  {

    const [isButtonActive, setIsButtonActive] = useState(false);
    const [isCardModalOpen, setIsCardModalOpen] = useState(false);
    const [isButtonModalOpen, setIsButtonModalOpen] = useState(false);

    let holdTimer;

    const handleClick = () => {
        setIsButtonActive((prev) => !prev);
        console.log('active btn')
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
        <div className={cn('card', {'cardActive': isButtonActive, 'm': size})} >
            <motion.div        
                className='cardContent'
                onClick={handleClick}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchEnd={handleMouseUp}>

                <IconButton iconName={'deviceInfo'} onClick={(e) => {
                    e.stopPropagation();
                    setIsButtonModalOpen(true);
                }} className={'deviceInfoButton'}/>

                <p>{deviceName}</p>

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