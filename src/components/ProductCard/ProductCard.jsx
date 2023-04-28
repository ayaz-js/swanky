import React from 'react';
import './style.scss';


const ProductCard = ({ cards, onImageClick, onButtonClick }) => {
  return (
    <>
      {cards.map((card) => {
        return (
            <article className="product-card" key={card?.id}>
              <img
                src={card?.image}
                alt={card?.name}
                className="product-card__image"
                onClick={() => onImageClick(card)}
              />
              <h3 className="product-card__name">{card?.name}</h3>
              <div className="product-card__container">
                <p className="product-card__price">{card?.price} ₸</p>
                <button
                  className="product-card__button"
                  onClick={() => onButtonClick(card)}
                >Заказать</button>
              </div>
            </article>
          )
        })}
    </>
  );
};

export default ProductCard;
