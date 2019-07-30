import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Services ({isPageLoaded}) {
    return (
        <div className={"about"}>
            <p className="about__title">НАША КОМПАНИЯ</p>
            <hr className={"divider"}/>
            <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorum earum ex ipsam. Culpa delectus, minus natus obcaecati quam unde?</p>
            <div className="about__list">
                <div className="about__list-item list-item">
                    <div className="list-item__image"></div>
                    <div className="list-item__title">Технологии</div>
                </div>
                <div className="about__list-item list-item">
                    <div className="list-item__image"></div>
                    <div className="list-item__title">Разработка</div>
                </div>
                <div className="about__list-item list-item">
                    <div className="list-item__image"></div>
                    <div className="list-item__title">Лаборатория</div>
                </div>
                <div className="about__list-item list-item">
                    <div className="list-item__image"></div>
                    <div className="list-item__title">Персонал</div>
                </div>
                <div className="about__list-item list-item">
                    <div className="list-item__image"></div>
                    <div className="list-item__title">Автопарк</div>
                </div>
                <div className="about__list-item list-item">
                    <div className="list-item__image"></div>
                    <div className="list-item__title">Видео</div>
                </div>
            </div>
        </div>
);

}
export default Services;