import React from 'react';
import './TechnologiesStyles.css';
import preloader from "../../images/preloader.gif";

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
                    {/*<div className="tech-container__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>*/}
                    <div className="tech-container__text">Наш завод располагает мощным парком автоматизированного оборудования для производства высококачественной упаковки из гофрокартона. Для производства используем как отечественное так и импортное сырьё, что дает нам возможность удовлетворять разнообразные запросы наших клиентов.</div>
                    <button className="tech-container__contect-button">СВЯЗАТЬСЯ С НАМИ</button>
                </div>
                <div className="tech-container__right-side"/>
            </div>
        </>
    );
}
export default Technologies;