import React from "react";

const InstantSetup = () => {
    return(
        <div class="instantSetup">
            <div class="heading">Instant setup. It's</div>
            <div class="instantSetupSteps">
                <InstantSetupStep stepNumber="1" iconClass="plugIcon" />
                <InstantSetupStep stepNumber="2" iconClass="phoneIcon" />
                <InstantSetupStep stepNumber="3" iconClass="wifiIcon" />
            </div>
            <div>
                Set up the Studio 7 in a few simple steps out of the box. Plug it in, download the
                Google Home app on your phone or tablet and connect to Wi-Fi to start streaming.
            </div>
        </div>
    );
};

function InstantSetupStep(props) {
    return (
        <div class="instantSetupStep">
            <div class="heading">{props.stepNumber}</div>
            <div class={props.iconClass} />
        </div>
    )
}
export default InstantSetup;