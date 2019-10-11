import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import video from  './images/video.mp4'
import Switch from "react-router-dom/es/Switch";

function CommonBG() {
    return (<div className="background"><div className="gradient"/><div className="noise"/></div>)
}


let Home = () => <><div className="background"><video className={"fullscreen-bg__video"} autoPlay={true} muted={true} loop={true}><source src={video} type="video/mp4"/></video><div className="overlay"/><div className="gradient"/><div className="noise"/></div></>

function Background() {
    return (
        <>
            <Switch>
                <Route path="/react-zgp" exact component={Home} />
                <Route path="" component={CommonBG} />
            </Switch>
        </>
    );
}
export default Background;