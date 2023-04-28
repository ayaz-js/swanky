import React from 'react';
import './style.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">

        <div className="header__contact-block">
          <a href="tel:+77764447723" className="header__link">+7 (776) 444 77 23</a>
          <p className="header__text">для заказа</p>
        </div>

        <div className="header__social">
          <img src="/images/instagram-icon.svg" alt="instagram: swanky.kz" className="header__icon" />
          <a href="https://instagram.com/swanky.kz" className="header__link">swanky.kz</a>
        </div>

        <div className="header__contact-block">
          <a href="tel:+77762561447" className="header__link">+7 (776) 256 14 47</a>
          <p className="header__text">для ресторанов и кафе</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
