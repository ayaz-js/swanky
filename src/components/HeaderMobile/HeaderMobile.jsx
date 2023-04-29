import React from 'react';
import './style.scss';

const HeaderMobile = ({ onArrowClick, headerSection }) => {
  return (
    <header className="header-mobile" ref={headerSection}>
      <div className="header-mobile__wrapper">

        <div className="header-mobile__social">
          <img src="./images/instagram-icon.svg" alt="instagram: swanky.kz" className="header-mobile__icon" />
          <a href="https://instagram.com/swanky.kz" className="header-mobile__link">swanky.kz</a>
        </div>

        <div className="header-mobile__lead">
          <img src="./images/lead-logo.svg" alt="Логотип: swanky.kz" className="header-mobile__lead-logo" />
          <img src="./images/lead-subtitle.svg"  alt="посуда со вкусом" className="header-mobile__lead-subtitle" />
        </div>

        <div className="header-mobile__contact-block">
          <div className="header-mobile__contact">
            <a href="tel:+77764447723" className="header-mobile__link header-mobile__link_phone">+7 (776) 444 77 23</a>
            <p className="header-mobile__text">для заказа</p>
          </div>

          <div className="header-mobile__contact">
            <a href="tel:+77762561447" className="header-mobile__link header-mobile__link_phone">+7 (776) 256 14 47</a>
            <p className="header-mobile__text">для ресторанов и кафе</p>
          </div>
        </div>


        <button className="header__button header-mobile__button" onClick={onArrowClick}>
          <img src="./images/arrow-down-header.svg" alt=""/>
        </button>

      </div>
    </header>
  );
};

export default HeaderMobile;
