import React, { useEffect, useRef } from 'react';
import './style.scss';
import Form from "../Form/Form";

const Popup = ({ card, isOpen, onClose }) => {
  const closeButtonRef = useRef();

  useEffect(() => {
    const handleEscClose = (event) => event.code === "Escape" && onClose();

    isOpen && document.addEventListener("keyup", handleEscClose);

    return () => {
      document.removeEventListener("keyup", handleEscClose);
    };
  }, [isOpen, onClose]);

  const handleClose = (event) => {
    if (event.target === event.currentTarget || event.target === closeButtonRef.current) {
      onClose();
    }
  }

  return (
    <div className={`popup` + (isOpen ? " popup_opened" : "")}>
      <div className="popup__overlay" onClick={handleClose}>
        <div className="popup__container">
          <div className="popup__buttons">
            <button
              type="button"
              className="popup__close-button"
              onClick={handleClose}
            ></button>
          </div>
          <div className="popup__text-container">
            <h2 className="popup__title">Заказать посуду</h2>
            <p className="popup__text">Оставьте свои данные и мы свяжемся
              с Вами для уточнения всех деталей</p>
          </div>

          <Form key={card?.id} card={card} isOpen={isOpen} onClose={onClose} />

        </div>
      </div>
    </div>
  );
};

export default Popup;
