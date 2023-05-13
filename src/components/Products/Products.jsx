import React from 'react';
import ProductContainer from '../ProductContainer/ProductContainer';
import SectionTitle from '../SectionTitle/SectionTitle';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import './style.scss';
import useProducts from "../../hooks/useProducts";

const Products = () => {
  const { productSection } = useProducts()
    return (
        <section className="products" ref={productSection}>
            <SectionTitle title="Каталог" />
            <ProductContainer />
            <LoadMoreButton />
        </section>
    );
};

export default Products;
