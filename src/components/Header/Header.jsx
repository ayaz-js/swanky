import React from 'react';
import './style.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">

        <div className="header__contact-block">
          <div className="header__contact">
            <a href="tel:+77764447723" className="header__link">+7 (776) 444 77 23</a>
            <p className="header__text">для заказа</p>
          </div>

          <div className="header__social">
            <img src="./images/instagram-icon.svg" alt="instagram: swanky.kz" className="header__icon" />
            <a href="https://instagram.com/swanky.kz" className="header__link">swanky.kz</a>
          </div>

          <div className="header__contact">
            <a href="tel:+77762561447" className="header__link">+7 (776) 256 14 47</a>
            <p className="header__text">для ресторанов и кафе</p>
          </div>
        </div>

        <div className="header__lead">
          <img src="./images/lead-logo.svg" alt="Логотип: swanky.kz" className="header__lead-logo" />
          <img src="./images/lead-subtitle.svg"  alt="посуда со вкусом" className="header__lead-subtitle" />
        </div>

        <button className="header__button">
          <img src="./images/arrow-down-header.svg" alt=""/>
        </button>

      </div>
    </header>
  );
};

export default Header;
