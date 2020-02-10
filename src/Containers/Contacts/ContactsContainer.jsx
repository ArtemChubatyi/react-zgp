import React, {Component} from 'react';
import './ContactsStyles.scss';
import {Preloader} from "../Preloader/Preloader";
import {DefaultContactView} from "./DefaultContactView";
import {FormForSales} from "./FormToSales";

export class ContactsComponent extends Component  {
    state = {
        currentView: 'default'
    };

    setContactView = (view) => {
        this.setState({currentView: view})
    };

    getCurrentView = () => {
        switch (this.state.currentView) {
            case 'default':
                return <DefaultContactView setContactView={this.setContactView}/>;
            case 'sales':
                return <FormForSales setContactView={this.setContactView}/>;
            default:
                return <DefaultContactView setContactView={this.setContactView}/>;
        }
    };

    render () {
        const {currentView} = this.state;
        return (
            <>
                <Preloader />
                <div className={`parallax-layer services-item-container${currentView === 'default' ? ' contacts-container' : ' form-container'}`} data-parallax-deep="3000">
                    <div className={`services-item-container__text-side left-alignment`}>
                    {this.getCurrentView()}
                    </div>
                    <div className="services-item-container__image-side"/>
                </div>
            </>
        );
    }
}
