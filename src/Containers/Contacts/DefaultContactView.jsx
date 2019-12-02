import React, {Component} from 'react';
import './ContactsStyles.scss';
import {Preloader} from "../Preloader/Preloader";
import {Link, useRouteMatch} from "react-router-dom";

export class DefaultContactView extends Component  {
    state = {
        isQuestionsMenuOpen: false
    };

    handleQuestionsOpen = () => {
        this.setState({isQuestionsMenuOpen: !this.state.isQuestionsMenuOpen})
    };

    render () {
        const {isQuestionsMenuOpen} = this.state;

        return (
            <>
                <div className={`services-item-container__text-side left-alignment`}>
                    <div className="services-item-container__title mini">ПОЯВИЛСЯ ВОПРОС?</div>
                    <div className="services-item-container__description">Ответить вам - наш долг</div>
                    <div className="services-item-container__divider"/>
                    <div className="contact-info">
                        <div className="contact-info__group">
                            <div className="contact-info__letter">M</div>
                            <a className="contact-info__text">info@zgp.com</a>
                        </div>
                        <div className="contact-info__group">
                            <div className="contact-info__letter">T</div>
                            <div className="contact-info__text">+380 99 468 08 62</div>
                        </div>
                        <div className="contact-info__group">
                            <div className="contact-info__letter">A</div>
                            <a href={'https://goo.gl/maps/eqLXWQKvpFTWQpFq7'} className="contact-info__text">Чехова, 2, Городище, Черкасская область</a>
                        </div>
                    </div>
                    <div className="services-item-container__title mini">ПОЯВИЛСЯ КОНКРЕТНЫЙ ВОПРОС?</div>
                    <div className={`services-item-container__contect-button${isQuestionsMenuOpen ? ' open' : ''}`} onClick={this.handleQuestionsOpen}>
                        <div className="button-text"> ВЫБЕРИТЕ ПОДХОДЯЩЕЕ
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down"
                                 role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                                 className="svg-inline--fa fa-angle-down fa-w-10 fa-2x">
                                <path fill="currentColor"
                                      d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                                      className=""/>
                            </svg></div>
                        <div className={`questions-container${isQuestionsMenuOpen ? ' visible' : ''}`}>
                            <p className="questions-container__item">Я хочу сделать заказ</p>
                            <p className="questions-container__item">Мне нужно больше информации</p>
                            <p className="questions-container__item">Мы хотим с вами сотрудничать</p>
                            <p className="questions-container__item">Хочу у вас работать</p>
                        </div>
                    </div>
                </div>
                <div className="services-item-container__image-side"/>
            </>
        );
    }
}
