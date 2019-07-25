import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class MenuPage extends Component  {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render () {
        let {menuPageClass} = this.props;
        return (
            <>
                <div className={menuPageClass}>
                    <ul className="menu-list">
                        <li className={(this.props.isMenuOpened) ? "menu-link showed" : "menu-link hided"}><Link to="/services">About</Link></li>
                        <li className={(this.props.isMenuOpened) ? "menu-link showed" : "menu-link hided"}><a href="javascript:void(0)">Реализация</a></li>
                        <li className={(this.props.isMenuOpened) ? "menu-link showed" : "menu-link hided"}><a href="javascript:void(0)">Технологии</a></li>
                        <li className={(this.props.isMenuOpened) ? "menu-link showed" : "menu-link hided"}><a href="javascript:void(0)">Галерея</a></li>
                        <li className={(this.props.isMenuOpened) ? "menu-link showed" : "menu-link hided"}><a href="javascript:void(0)">Блог</a></li>
                        <li className={(this.props.isMenuOpened) ? "menu-link showed" : "menu-link hided"}><a href="javascript:void(0)">Контакты</a></li>
                    </ul>
                    <div className={(this.props.isMenuOpened) ? "menu-footer showed" : "menu-footer hided"}>
                        <div className="lang">
                            <span className="ua">UA</span>/<span className="en">EN</span>/<span className="ru">RU</span>
                        </div>
                        <div className="info">IBAN BE94 3631 3792 1714 | TVA 0563 860 901</div>
                        <div className="social-links">
                            <span className="facebook">Facebook</span>/<span className="span linkedin">LinkedIn</span>/<span className="instagram">Instagram</span>
                        </div>
                    </div>
                    <div className={(this.props.isMenuOpened) ? "close-button showed" : "close-button hided"}  onClick={this.props.handleMenuOpen}>
                        <div className="close-button-line first"></div>
                        <div className="close-button-line second"></div>
                    </div>
                    <div className={(this.props.isMenuOpened) ? "menu-logo showed" : "menu-logo hided"}></div>
                </div>
            </>
        );
    }


}

export default MenuPage;