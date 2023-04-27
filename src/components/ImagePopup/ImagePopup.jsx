import React, { useEffect, useRef } from 'react';
import './style.scss';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ImagePopup = ({card, isOpen, onClose}) => {
  const closeButton = useRef();

  useEffect(() => {
    const handleEscClose = (event) => event.code === "Escape" && onClose();

    isOpen && document.addEventListener("keyup", handleEscClose);

    return () => {
      document.removeEventListener("keyup", handleEscClose);
    };
  }, [isOpen, onClose]);

  const handleClose = (event) => {
    if (event.target === event.currentTarget || event.target === closeButton.current) {
      onClose();
    }
  }

  const splitImages = card?.imagesSlider.split(',');

  return (
    <div className={`popup image-popup` + (isOpen ? " popup_opened" : "")}>
      <div className="popup__overlay" onClick={handleClose}>
        <div className="popup__container popup__container_type_image">
          <div className="popup__buttons">
            <button
              type="button"
              className="popup__close-button"
              onClick={handleClose}
            ></button>
          </div>
          <Swiper className="mySwiper">
            {splitImages?.map((image) => {
              return (
                <SwiperSlide>
                  <img
                    src={image}
                    alt={card?.name}
                    className="popup__image"
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
          <div>
            <h2>{card?.name}</h2>
            <p>{card?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePopup;
