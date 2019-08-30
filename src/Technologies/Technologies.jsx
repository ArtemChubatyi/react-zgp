import React from 'react';
import './TechnologiesStyles.css';
import preloader from "../images/preloader.gif";

function Technologies() {
    return (
        <>
            <div className="animation-container">
                <div className="animation-column"></div>
                <div className="animation-column"></div>
                <div className="animation-column"></div>
                <div className="animation-column"></div>
                <div className="animation-column"></div>
                <div className="animation-column"></div>
                <div className="animation-column"></div>
                <div className="animation-column"></div>
                <img src={preloader} className="animation-preloader"/>
            </div>
            <div className="parallax-layer tech-container"  data-parallax-deep="3000">
                <div className="tech-container__left-side">
                    <div className="tech-container__title">ТЕХНОЛОГИИ</div>
                    <div className="tech-container__divider"/>
                    <div className="tech-container__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                    <div className="tech-container__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dicta, harum? Ad adipisci consectetur dolorum error id ipsa ipsum iure labore officiis, quisquam recusandae vitae! Alias consequatur dicta dolore doloribus, error esse est explicabo, ipsam ipsum laboriosam laborum libero molestias nisi optio quaerat quasi quibusdam quidem rem tempore voluptate voluptates.</div>
                    <button className="tech-container__contect-button">СВЯЗАТЬСЯ С НАМИ</button>
                </div>
                <div className="tech-container__right-side"/>
            </div>
        </>
    );
}
export default Technologies;