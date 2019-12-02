import React, {Component} from 'react';
import './ContactsStyles.scss';
import {Preloader} from "../Preloader/Preloader";
import {Route} from "react-router-dom";
import {DefaultContactView} from "./DefaultContactView";

export class ContactsComponent extends Component  {
    state = {

    };

    render () {

        return (
            <>
                <Preloader />
                <div className={`parallax-layer services-item-container contacts-container`} data-parallax-deep="3000">
                    <Route path="/contacts" component={DefaultContactView} />
                </div>
            </>
        );
    }
}
