import React from 'react';
import {Route} from "react-router-dom";
import Services from '../Services/Services';
import {Technologies} from "../Technologies/Technologies";
import Development from "../Development/Development";
import Laboratory from "../Laboratory/Laboratory";
import {ContactsComponent} from "../Contacts/ContactsContainer";
import {ParkComponent} from "../Park/ParkComponent";
import {StaffComponent} from "../Staff/StaffComponent";
import {VideoContainer} from "../VideoContainer/VideoContainer";
import {ProductsContainer} from "../ProductsContainer/ProductsContainer";

function Home() {
    return <div className="textlogo parallax-layer text"  data-parallax-deep="2000" />
}

function ContentContainer ({isPageLoaded}) {
    return (
        <div className={`parallax${(isPageLoaded) ? " visible" : " invisible"}`}>
            <Route path="/react-zgp" exact component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/technologies" component={Technologies} />
            <Route path="/development" component={Development} />
            <Route path="/laboratory" component={Laboratory} />
            <Route path="/contacts" component={ContactsComponent} />
            <Route path="/park" component={ParkComponent} />
            <Route path="/staff" component={StaffComponent} />
            <Route path="/video" component={VideoContainer} />
            <Route path="/products" component={ProductsContainer} />
        </div>
    );
}

export default ContentContainer;