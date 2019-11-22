import React from 'react';

function About() {
    return (
        <div className="parallax">
            <div className="parallax-layer parallax-layer__1" data-parallax-disallow="y"
                data-parallax-deep="1000"/>
            <div className="parallax-layer parallax-layer__2" data-parallax-deep="40"/>
            <div className="parallax-layer parallax-layer__3" data-parallax-deep="100"/>
        </div>
    );
}

export default About;