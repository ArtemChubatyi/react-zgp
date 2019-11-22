import React from 'react';
import {Route} from "react-router-dom";
import video from '../../images/video.mp4'
import {Switch} from "react-router-dom";

function Background() {
    return (
        <>
            <Switch>
                <Route path="/react-zgp" exact>
                    <div className="background">
                        <video className={"fullscreen-bg__video"} autoPlay={true} muted={true} loop={true}>
                            <source src={video} type="video/mp4"/>
                        </video><div className="overlay"/>
                        <div className="gradient"/>
                        <div className="noise"/>
                    </div>
                </Route>
                <Route path="">
                    <div className="background">
                        <div className="gradient"/>
                        <div className="noise"/>
                    </div>
                </Route>
            </Switch>
        </>
    );
}
export default Background;