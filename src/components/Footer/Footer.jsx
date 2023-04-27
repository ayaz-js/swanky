import React from 'react';
import './style.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__row">
          <a
            className="footer__link"
            href="tel:+77011234567"
          >+7 701 123 45 67</a>

          <a
            className="footer__link"
            href="https://instagram.com/"
          >@instagram</a>

          <p className="footer__address">г. Алматы, ул. Сейфулина 37,</p>
        </div>

        <div className="footer__row">
            <img
              className="footer__logo"
              src="/images/logo-footer.svg"
              alt="Логотип: Swanky"
            />

          <button className="footer__button">На вверх</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
