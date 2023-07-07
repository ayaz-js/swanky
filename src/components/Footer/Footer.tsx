import React, { FC } from 'react';
import './style.scss';
import { Props } from "./types";

export const Footer: FC<Props> = ({ onArrowClick }) => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__row">

          <div className="footer__contact">
            <a className="footer__link"
              href="tel:+77764447723"
            >+7 (776) 444 77 23</a>
            <p className="footer__text">для заказа</p>
          </div>

          <div className="footer__contact">
            <a className="footer__link"
               href="tel:+77762561447"
            >+7 (776) 256 14 47</a>
            <p className="footer__text">для ресторанов/баров/кафе</p>
          </div>

          <div className="footer__contact">
            <a href="https://instagram.com/swanky.kz" className="footer__link footer__link_row">
              <img src="./images/instagram-icon.svg" alt="instagram: swanky.kz" className="footer__social-icon" />
              swanky.kz
            </a>
            <p className="footer__text">Онлайн магазин</p>
          </div>

        </div>

        <div className="footer__row">
            <img
              className="footer__logo"
              src="./images/logo-footer.svg"
              alt="Логотип: Swanky"
            />

          <button className="footer__button" onClick={onArrowClick}>На вверх</button>
        </div>
      </div>
    </footer>
  );
};
