import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Services from './Services';

function getServices() {
    return <Services />
}

function Home() {
    return <div className="textlogo"><div className="text"></div></div>
}

function Scene ({isPageLoaded}) {
    return (
        <div id="scene" className={(isPageLoaded) ? "visible" : "invisible"}>
            <div data-depth="0.2" className={"layer"}>
                <Route path="/" exact component={Home} />
                <Route path="/services" component={getServices} />
            </div>
        </div>
);

}
export default Scene;