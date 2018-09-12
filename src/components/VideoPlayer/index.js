import React from "react";

// TODO compiler requires "autoPlay" attribute, HTML 5 spec lists: "autoplay"
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#Attributes

// TODO compiler requires </source> closing tag, HTML 5 spec defines no closing tag for <source>
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source

const VideoPlayer = () => {
    return (
        <div class="fancyVideo">
            <video autoPlay loop="loop" preload="auto" muted="true">
                <source src="https://storage.googleapis.com/leedssound.com/Leeds_Studio7_LaunchVideo%5B1080pWEB%5D.mp4" type="video/mp4"/> 
                Your browser does not support the HTML 5 video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;