import React, {useEffect, useState} from 'react';
import './style.scss';

const FeatureItem = () => {
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
          src="/images/features-1.png"
          alt=""
          className="feature-item__image"
        />
        <div className="feature-item__text-container">
          <p className="feature-item__heading">Большой ассортимент</p>
          <p className="feature-item__text">В нашем каталоге представлена посуда и
            столовые приборы для дома. Здесь вы найдете! все необходимое, и даже больше. А так же множество приборов для ресторанов и баров.</p>

          <p className="feature-item__heading feature-item__heading_mt">Качество и оригинальность</p>
          <p className="feature-item__text">Наш главный критерий отбора посуды — качество и оригинальность, чтоб ваши блюда на кухне выглядели еще эффектней.</p>
        </div>
      </article>

      <article className="feature-item">
        {!isMobile && (
          <img
            src="/images/features-2.png"
            alt=""
            className="feature-item__image"
          />
        )}
        <div className="feature-item__text-container">
          <p className="feature-item__heading">Профессиональный сервис</p>
          <p className="feature-item__text">Мы стараемся, чтобы покупки приносили радость: и удовольствие. Вы можете приобрести товар удобным для вас способом оплаты, подобрать оптимальный способ доставки.</p>

          <p className="feature-item__heading feature-item__heading_mt">Доставка и оплата</p>
          <p className="feature-item__text">Осуществляем доставку наших товаров в черте города Алматы. Вы можете оплатить свой заказ наличными при доставке, использовать банковскую карту или через Kaspi.</p>
        </div>
      </article>
    </>
  );
};

export default FeatureItem;
