import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Services from './Services';

function getServices() {
    return <Services />
}

function Home() {
    return <div className="textlogo parallax-layer text"  data-parallax-deep="3000" />
}

function Scene ({isPageLoaded}) {
    return (
        <div className={`parallax${(isPageLoaded) ? " visible" : " invisible"}`}>
            <Route path="/react-zgp" exact component={Home} />
            <Route path="/services" component={getServices} />
        </div>
);

}
export default Scene;