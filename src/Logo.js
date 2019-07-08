import React from 'react';

function Logo ({isPageLoaded}) {
    return (
        <div id="scene" className={(isPageLoaded) ? "visible" : "invisible"}>
            <div data-depth="0.2" className={"layer"}>
                <div className="textlogo">
                    <div className="text"></div>
                </div>
            </div>
        </div>
);

}
export default Logo;