import React from 'react';
import video from  './images/video.mp4'

function Video() {
    return (
        <>
            <video className={"fullscreen-bg__video"} autoPlay={true} muted={true} loop={true}>
                <source src={video} type="video/mp4"></source>
            </video>
            <div className="overlay"></div>
        </>
    );
}
export default Video;