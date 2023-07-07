import React from 'react';
import { ProductCard } from '../ProductCard';
import './style.scss';

export const ProductContainer = () => {
    return (
        <div className="product-container">
            <ProductCard />
        </div>
    );
};
