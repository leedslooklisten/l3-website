import React from "react";

const GoogleIntegration = () => {

    return (
        <div className="googleIntegration">
            <div className="heading">Remote Control | Google Voice Assistant</div>
            <div>
                Our speaker is more than just a speaker. Use your voice to interact with the Studio 7's
                one-of-a-kind remote to choose songs to play, set reminders, or control other devices
                around your home.
            </div>
            <div className="googleHomeLogo" />
            <div className="googleHomeCommands">
                <div className="fadeTop">Ok Google, turn it up.</div>
                <div>Ok Google, next song.</div>
                <div className="fadeBottom">Ok Google, remind me to buy groceries.</div>
            </div>
            <div className="googleHomeDeviceImage" />
        </div>
    );
};

export default GoogleIntegration;