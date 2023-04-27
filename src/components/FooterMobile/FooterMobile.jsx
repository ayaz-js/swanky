import React from 'react';
import './style.scss';

const FooterMobile = () => {
  return (
    <footer className="footer-mobile">
      <div className="footer-mobile__wrapper">
        <img
          className="footer-mobile__logo"
          src="/images/logo-footer.svg"
          alt="Логотип: Swanky"
        />

        <div className="footer-mobile__links">
          <a
            className="footer-mobile__link"
            href="tel:+77011234567"
          >+7 701 123 45 67</a>

          <a
            className="footer-mobile__link"
            href="https://instagram.com/"
          >@instagram</a>

          <p className="footer-mobile__address">г. Алматы, ул. Сейфулина 37,</p>
        </div>

        <button className="footer-mobile__button">На вверх</button>
      </div>
    </footer>
  );
};

export default FooterMobile;
