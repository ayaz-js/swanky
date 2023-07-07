import React from 'react';
import './style.scss';
import { SectionTitle } from "../SectionTitle";
import { FeatureItem } from "../FeatureItem";

export const Features = () => {
  return (
    <section className="features">
      <SectionTitle title="Преимущества нашего бренда" />

      <div className="features__container">
        <FeatureItem />
      </div>
    </section>
  );
};
