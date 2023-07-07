import React, { FC } from 'react';
import './style.scss';
import { Props } from "./types";
export const SectionTitle: FC<Props> = ({title}) => {
    return (
        <>
         <h2 className="section-title">{title}</h2>
        </>
    );
};
