import React from "react";

const GoogleIntegration = () => {

    return (
        <div class="googleIntegration">
            <div class="heading">Remote Control | Google Voice Assistant</div>
            <div>
                Our speaker is more than just a speaker. Use your voice to interact with the Studio 7's
                one-of-a-kind remote to choose songs to play, set reminders, or control other devices
                around your home.
            </div>
            <div class="googleHomeLogo" />
            <div class="googleHomeCommands">
                <div class="fadeTop">Ok Google, turn it up.</div>
                <div>Ok Google, next song.</div>
                <div class="fadeBottom">Ok Google, remind me to buy groceries.</div>
            </div>
            <div class="googleHomeDeviceImage" />
        </div>
    );
};

export default GoogleIntegration;