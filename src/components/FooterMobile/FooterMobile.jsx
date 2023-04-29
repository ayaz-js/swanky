import React from 'react';
import './style.scss';

const FooterMobile = ({ onArrowClick }) => {
  return (
    <footer className="footer-mobile">
      <div className="footer-mobile__wrapper">
        <img
          className="footer-mobile__logo"
          src="./images/logo-footer.svg"
          alt="Логотип: Swanky"
        />

        <div className="footer-mobile__links">

          <div className="footer-mobile__contact">
            <a className="footer-mobile__link"
               href="tel:+77764447723"
            >+7 (776) 444 77 23</a>
            <p className="footer-mobile__text">для заказа</p>
          </div>

          <div className="footer-mobile__contact">
            <a className="footer-mobile__link"
               href="tel:+77762561447"
            >+7 (776) 256 14 47</a>
            <p className="footer-mobile__text">для ресторанов/баров/кафе</p>
          </div>

          <div className="footer-mobile__contact">
            <a href="https://instagram.com/swanky.kz" className="footer-mobile__link footer__link_row">
              <img src="./images/instagram-icon.svg" alt="instagram: swanky.kz" className="footer__social-icon" />
              swanky.kz
            </a>
            <p className="footer-mobile__text">Онлайн магазин</p>
          </div>

        </div>

        <button className="footer-mobile__button" onClick={onArrowClick}>На вверх</button>
      </div>
    </footer>
  );
};

export default FooterMobile;
