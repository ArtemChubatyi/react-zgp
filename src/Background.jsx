import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import video from  './images/video.mp4'

function Services() {
    return (<div className="background"><div className="gradient"/><div className="noise"/></div>)
}


let Home = () => <><div className="background"><video className={"fullscreen-bg__video"} autoPlay={true} muted={true} loop={true}><source src={video} type="video/mp4"/></video><div className="overlay"/><div className="gradient"/><div className="noise"/></div></>

function Background() {
    return (
        <>
            <Route path="/react-zgp" exact component={Home} />
            <Route path="/services" component={Services} />
        </>
    );
}
export default Background;