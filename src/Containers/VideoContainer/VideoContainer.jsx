import React from 'react';
import './VideoContainerStyles.scss'
import {Preloader} from "../../Containers/Preloader/Preloader";

export function VideoContainer() {

    return (
        <>
            <Preloader />
            <div className={`parallax-layer video`} data-parallax-deep="3000">
                <iframe src="https://www.youtube.com/embed/_WV0LNSSiGM" frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen/>
            </div>
        </>
    );
}