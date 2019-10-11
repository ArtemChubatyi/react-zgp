import React from 'react';
import './DevelopmentStyles.css'
import preloader from "../images/preloader.gif";

function Development() {
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
                    <div className="tech-container__title">РАЗРАБОТКА</div>
                    <div className="tech-container__divider"/>
                    {/*<div className="tech-container__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>*/}
                    <div className="tech-container__text">Квалифицированные сотрудники предприятия разработают и изготовят  индивидуальный макет упаковки, учитывая специфику именно вашей продукции. На все виды гофроупаковки возможно нанесение одно или двухцветной флексографической печати.</div>
                    <button className="tech-container__contect-button">СВЯЗАТЬСЯ С НАМИ</button>
                </div>
                <div className="tech-container__right-side dev"/>
            </div>
        </>
    );
}
export default Development;