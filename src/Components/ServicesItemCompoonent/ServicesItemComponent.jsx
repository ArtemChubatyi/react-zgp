import React from 'react';
import './ServicesItemStyles.scss';
import {Preloader} from "../../Containers/Preloader/Preloader";

export function ServicesItemComponent({customClass, title, description, textPartAlignment}) {
    const getImageSide = () => <div className="services-item-container__image-side"/>;
    const getTextSide = () => {

        return (<div className={`services-item-container__text-side ${textPartAlignment}-alignment`}>
            <div className="services-item-container__title">{title}</div>
            <div className="services-item-container__divider"/>
            <div className="services-item-container__text">{description}</div>
            <button className="services-item-container__contect-button">СВЯЗАТЬСЯ С НАМИ</button>
        </div>)
    };

    return (
        <>
            <Preloader />
            <div className={`parallax-layer services-item-container ${customClass}`} data-parallax-deep="3000">
                {textPartAlignment === 'left' ? getTextSide() : getImageSide()}
                {textPartAlignment === 'left' ? getImageSide() : getTextSide()}
            </div>
        </>
    );
}