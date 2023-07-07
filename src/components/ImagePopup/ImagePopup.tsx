import React, { FC, useEffect, useRef } from 'react';
import './style.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Props } from "./types";


export const ImagePopup: FC<Props> = ({ card, isOpen, onClose }) => {
  const closeButton = useRef();

  useEffect(() => {
    const handleEscClose = (event: KeyboardEvent) => event.code === "Escape" && onClose();

    isOpen && document.addEventListener("keyup", handleEscClose);

    return () => {
      document.removeEventListener("keyup", handleEscClose);
    };
  }, [isOpen, onClose]);

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
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
          {isOpen && (
            <>
              <Swiper
                navigation={true}
                pagination={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className="popup__swiper">
                {splitImages?.map((image) => {
                  return (
                    <SwiperSlide key={image}>
                      <img
                        src={image}
                        alt={card?.name}
                        className="popup__image"
                      />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
              <div className="popup__product-text-container">
                <h2 className="popup__product-title">{card?.name}</h2>
                <p className="popup__product-text">{card?.description}</p>
                <p className="popup__product-price">Цена: {card?.price} ₸</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
