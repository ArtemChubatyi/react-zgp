import React from 'react';
import './ProductsItemStyles.scss';
import {Preloader} from "../../Containers/Preloader/Preloader";

export function ProductsItemComponent({customClass, title, description, textPartAlignment}) {
    const getImageSide = () => <div className="products-item-container__image-side"/>;
    const getTextSide = () => {

        return (<div className={`products-item-container__text-side ${textPartAlignment}-alignment`}>
            <div className="products-item-container__title">{title}</div>
            <div className="products-item-container__divider"/>
            <div className="products-item-container__text">{description}</div>
            <button className="products-item-container__contect-button">СВЯЗАТЬСЯ С НАМИ</button>
        </div>)
    };

    return (
        <>
            <div className={`parallax-layer products-item-container ${customClass}`} data-parallax-deep="3000">
                {textPartAlignment === 'left' ? getTextSide() : getImageSide()}
                {textPartAlignment === 'left' ? getImageSide() : getTextSide()}
            </div>
        </>
    );
}