import React from "react";

const VideoPlayer = () => {
    return (
        <div class="fancyVideo">
            <video 
            // src="https://player.vimeo.com/external/260015882.hd.mp4?s=a1321e6df42f072dc1a0c62018580a2b2387f402&amp;profile_id=174"
            src="https://storage.googleapis.com/leedssound.com/Leeds_Studio7_LaunchVideo%5B1080pWEB%5D.mp4" 
            autoplay="autoplay" 
            loop="loop" 
            preload="auto" 
            muted="true" />
        </div>
    );
};

export default VideoPlayer;