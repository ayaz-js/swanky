import React, { useEffect, useState } from 'react';
import './style.scss';

export const FeatureItem = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 820;
  return (
    <>
      <article className="feature-item">
        <img
          src="./images/features-1.png"
          alt=""
          className="feature-item__image"
        />
        <div className="feature-item__text-container">
          <p className="feature-item__heading">Уникальный стиль</p>
          <p className="feature-item__text">Дизайны наших моделей подбираются в соответствии с современными тенденциями. Наша продукция придаст эстетику и уникальность вашей сервировке стола. А стиль будет удивлять и очаровывать.
          </p>

          <p className="feature-item__heading feature-item__heading_mt">Качество выше, чем цена</p>
          <p className="feature-item__text">Наше качество, всегда превосходит стоимость. Мы работаем напрямую с заводами. Не имеем никаких посредников. Наши заводы, имеют все сертификаты, и также поставляют продукцию в Европу и по Всему Миру.
          </p>
        </div>
      </article>

      <article className="feature-item">
        {!isMobile && (
          <img
            src="./images/features-2.png"
            alt=""
            className="feature-item__image"
          />
        )}
        <div className="feature-item__text-container">
          <p className="feature-item__heading">Рестораны и бары</p>
          <p className="feature-item__text">Для ресторанов, кафе и баров у нас уникальные условия. Вы можете приобретать посуду из расширенного каталога под заказ. Для заказа обращайтесь по номеру: +7 776 256 1447</p>

          <p className="feature-item__heading feature-item__heading_mt">Доставка и оплата</p>
          <p className="feature-item__text">Осуществляем доставку наших товаров в черте города Алматы. Вы можете оплатить свой заказ наличными при доставке или через Kaspi.</p>
        </div>
      </article>
    </>
  );
};
