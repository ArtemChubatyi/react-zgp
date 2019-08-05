import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Services ({isPageLoaded}) {
    return (
        <div className={"about parallax-layer"}  data-parallax-deep="3000">
            <p className="about__title">НАША КОМПАНИЯ</p>
            <div className={"divider"}/>
            <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorum earum ex ipsam. Culpa delectus, minus natus obcaecati quam unde?</p>
            <div className="about__list">
                <div className="about__list-item list-item">
                    <div id="first" className="list-item__image">
                    </div>
                    <div className="list-item__title">Технологии</div>
                </div>
                <div className="about__list-item list-item">
                    <div id="second" className="list-item__image"></div>
                    <div className="list-item__title">Разработка</div>
                </div>
                <div className="about__list-item list-item">
                    <div id="third" className="list-item__image"></div>
                    <div className="list-item__title">Лаборатория</div>
                </div>
                <div className="about__list-item list-item">
                    <div id="fourth" className="list-item__image"></div>
                    <div className="list-item__title">Персонал</div>
                </div>
                <div className="about__list-item list-item">
                    <div id="fifth" className="list-item__image"></div>
                    <div className="list-item__title">Автопарк</div>
                </div>
                <div className="about__list-item list-item">
                    <div id="sixth" className="list-item__image"></div>
                    <div className="list-item__title">Видео</div>
                </div>
            </div>
        </div>
);

}
export default Services;