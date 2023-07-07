import React, { FC } from 'react';
import './style.scss';
import { useDispatch } from "react-redux";
import { showImageModal, showOrderModal } from "../../store/actions/popupActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";



export const ProductCard: FC = () => {
  const dispatch = useDispatch()

  const cards = useTypedSelector(state => state.products.products)

  const handleImageClick = (card: []) => dispatch(showImageModal(card))
  const handleButtonClick = (card: []) => dispatch(showOrderModal(card))

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
              <p className="product-card__id">арт: {card.id}</p>
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
