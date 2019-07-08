import React, {Component} from 'react';

class Interface extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            menuButtonLineClass: "hamburger-line compressed",
            menuButtonClass: "menu-button",
            chatButtonClass: "chat-button hided",
            openMenuButtonClass: "open-menu-button hided",
            isMenuOpened: false
        };
    }

    setupInterface = () => {
        if (this.props.isPageLoaded) {
            setTimeout(() => {
                this.setState({
                    menuButtonLineClass: "hamburger-line",
                    chatButtonClass: "chat-button",
                    openMenuButtonClass: "open-menu-button"
                })
            }, 1000)
        }
    };

    render () {
        return (
            <>
                {this.setupInterface()}
                <div className={this.state.menuButtonClass} onClick={this.props.handleMenuOpen}>

                    <div className={this.state.menuButtonLineClass}></div>
                    <div className={this.state.menuButtonLineClass}></div>
                    <div className={this.state.menuButtonLineClass}></div>
                    <div className={this.state.menuButtonLineClass}></div>
                </div>
                <div className={this.state.chatButtonClass}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="envelope" role="img"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                         className="svg-inline--fa fa-envelope fa-w-16 fa-3x">
                        <path fill="white"
                              d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"
                              className=""></path>
                    </svg>
                </div>
                <div className={this.state.openMenuButtonClass}>
                    <p className="open-line">Открыть</p>
                    <div className="vertical-line"></div>
                </div>
            </>
        );
    }


}

export default Interface;