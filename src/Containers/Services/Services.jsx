import React from 'react';
import {Link} from "react-router-dom";
import {Preloader} from "../Preloader/Preloader";

function Services ({isPageLoaded, match}) {
    return (
        <>
            <Preloader/>
            <div className='about parallax-layer'  data-parallax-deep="3000">
                <p className="about__title">НАША КОМПАНИЯ</p>
                <div className='divider'/>
                <p className="about__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorum earum ex ipsam. Culpa delectus, minus natus obcaecati quam unde?</p>
                <div className="about__list">
                    <Link className="about__list-item list-item" to={`/technologies`}>
                        <div id="first" className="list-item__image">
                        </div>
                        <div className="list-item__title">Технологии</div>
                        <div className="hover-line"/>
                    </Link>
                    <Link className="about__list-item list-item" to={`/development`}>
                        <div id="second" className="list-item__image"></div>
                        <div className="list-item__title">Разработка</div>
                        <div className="hover-line"/>
                    </Link>
                    <Link className="about__list-item list-item" to={`/laboratory`}>
                        <div id="third" className="list-item__image"></div>
                        <div className="list-item__title">Лаборатория</div>
                        <div className="hover-line"/>
                    </Link>
                    <Link className="about__list-item list-item" to={`/staff`}>
                        <div id="fourth" className="list-item__image"></div>
                        <div className="list-item__title">Персонал</div>
                        <div className="hover-line"/>
                    </Link>
                    <Link className="about__list-item list-item" to={`/park`}>
                        <div id="fifth" className="list-item__image"></div>
                        <div className="list-item__title">Автопарк</div>
                        <div className="hover-line"/>
                    </Link>
                    <Link className="about__list-item list-item"to={`/video`}>
                        <div id="sixth" className="list-item__image"></div>
                        <div className="list-item__title">Видео</div>
                        <div className="hover-line"/>
                    </Link>
                </div>
            </div>
        </>
);

}
export default Services;