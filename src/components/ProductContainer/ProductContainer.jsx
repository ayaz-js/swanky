import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './style.scss';

const ProductContainer = ({ cards, onImageClick, onButtonClick }) => {
    return (
        <div className="product-container">
            <ProductCard
              cards={cards}
              onImageClick={onImageClick}
              onButtonClick={onButtonClick}
            />
        </div>
    );
};

export default ProductContainer;
