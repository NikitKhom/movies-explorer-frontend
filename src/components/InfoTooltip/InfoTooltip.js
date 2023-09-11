import React from 'react';
import { useEffect } from 'react';


function InfoTooltip({ isOpen, isSuccesful, onClose, title, icon}) {

    useEffect(() => {
        if (!isOpen) return;
        const handleEscapeClose = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscapeClose);
        return () => {
            document.removeEventListener('keydown', handleEscapeClose);
        };
    }, [isOpen, onClose]);

    const handleOverlayClose = (e) => {
        if (e.target === e.currentTarget && isOpen) {
            onClose();
        }
    };

    return (
        <div className={`popup ${isOpen ? 'popup_opened' : ''}`} onMouseDown={handleOverlayClose}>
            <div className='popup__content'>
                <img className='popup__icon' src={icon} alt='Статус операции'/>
                <h2 className='popup__title'>{title}</h2>
                <button className='popup__close-button' type='button' onClick={onClose}/> 
            </div>
        </div>
    )
}

export default InfoTooltip;