import React, { FC } from 'react';
import { ProductContainer } from '../ProductContainer';
import { SectionTitle } from '../SectionTitle';
import './style.scss';
import { Props } from "./types";

export const Products: FC<Props> = ({ productSection }) => {
    return (
        <section className="products" ref={productSection}>
            <SectionTitle title="Каталог"/>
            <ProductContainer/>
        </section>
    );
};
