import React from 'react';
import logo from  './images/logo.png'

function Logo() {
    return (
        <div id="scene">
            <div data-depth="0.2" className={"layer"}>
                <div className="textlogo">
                    <div className="text"></div>
                </div>
            </div>
        </div>
    );
}
export default Logo;