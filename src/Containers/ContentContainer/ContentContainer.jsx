import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Services from '../Services/Services';
import Technologies from "../Technologies/Technologies";
import Development from "../Development/Development";
import Laboratory from "../Laboratory/Laboratory";

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
        </div>
);

}
export default ContentContainer;