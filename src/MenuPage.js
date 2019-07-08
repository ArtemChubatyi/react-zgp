import React, {Component} from 'react';

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
                        <li className="menu-link"><a className="active" href="javascript:void(0)">Услуги</a></li>
                        <li className="menu-link"><a href="javascript:void(0)">Реализация</a></li>
                        <li className="menu-link"><a href="javascript:void(0)">Технологии</a></li>
                        <li className="menu-link"><a href="javascript:void(0)">Галерея</a></li>
                        <li className="menu-link"><a href="javascript:void(0)">Блог</a></li>
                        <li className="menu-link"><a href="javascript:void(0)">Контакты</a></li>
                    </ul>
                    <div className="menu-footer">
                        <div className="lang">
                            <span className="ua">UA</span>/<span className="en">EN</span>/<span className="ru">RU</span>
                        </div>
                        <div className="info">IBAN BE94 3631 3792 1714 | TVA 0563 860 901</div>
                        <div className="social-links">
                            <span className="facebook">Facebook</span>/<span className="span linkedin">LinkedIn</span>/<span className="instagram">Instagram</span>
                        </div>
                    </div>
                    <div className="close-button"  onClick={this.props.handleMenuOpen}>
                        <div className="close-button-line first"></div>
                        <div className="close-button-line second"></div>
                    </div>
                    <div className="menu-logo"></div>
                </div>
            </>
        );
    }


}

export default MenuPage;