import React, {Component} from "react";
import '../../App.css';

import VideoPlayer from "../../components/VideoPlayer"
import ImageTumbler from "../../components/ImageTumbler"
import CloseupLight from "../../components/CloseupLight"
import CloseupDark from "../../components/CloseupDark"
import GoogleIntegration from "../../components/GoogleIntegration"
import Acoustics from "../../components/Acoustics"
import InstantSetup from "../../components/InstantSetup"
import MoreFeatures from "../../components/MoreFeatures"
import JoinWaitlist from "../../components/JoinWaitlist"

class HomePage extends Component{
   render() {
       return(
            <div>
                <VideoPlayer/>
                <ImageTumbler/>
                <CloseupLight />
                <InSituImage />
                <CloseupDark />
                <GoogleIntegration />
                <Acoustics />
                <InstantSetup />
                <MoreFeatures />
                <JoinWaitlist />
            </div>
       )
   } 
}

function InSituImage(props) {
    return (
        <div class="inSituImage">
            <p class="heading">High-fidelity sound for a new generation</p>
        </div>
    )
}


export default HomePage;