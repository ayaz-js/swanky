import React from 'react';
import ProductContainer from '../ProductContainer/ProductContainer';
import SectionTitle from '../SectionTitle/SectionTitle';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import './style.scss';

const Products = ({ productSection, cards, onImageClick, onButtonClick }) => {
    return (
        <section className="products" ref={productSection}>
            <SectionTitle title="Каталог" />
            <ProductContainer
              cards={cards}
              onImageClick={onImageClick}
              onButtonClick={onButtonClick}
            />
            <LoadMoreButton />
        </section>
    );
};

export default Products;
