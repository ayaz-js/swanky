import React from 'react';
import './style.scss';
import { useDispatch, useSelector } from "react-redux";
import { showImageModal, showOrderModal } from "../../store/actions/popupActions";



const ProductCard = () => {
  const dispatch = useDispatch()

  const cards = useSelector(state => state.products.products)
  const handleImageClick = (card) => dispatch(showImageModal(card))
  const handleButtonClick = (card) => dispatch(showOrderModal(card))

  return (
    <>
      {cards?.map((card) => {
        return (
            <article className="product-card" key={card?.id}>
              <img
                src={card?.image}
                alt={card?.name}
                className="product-card__image"
                onClick={() => handleImageClick(card)}
              />
              <h3 className="product-card__name">{card?.name}</h3>
              <div className="product-card__container">
                <p className="product-card__price">{card?.price} ₸</p>
                <button
                  className="product-card__button"
                  onClick={() => handleButtonClick(card)}
                >Заказать</button>
              </div>
            </article>
          )
        })}
    </>
  );
};

export default ProductCard;
