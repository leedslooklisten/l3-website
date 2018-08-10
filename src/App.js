import React, { Component } from 'react';
import './App.css';
import MenuBar from './MenuBar';

class VideoPlayer extends Component {
  render() {
    return (
      <div class="fancyVideo">
        <video 
          src="https://player.vimeo.com/external/260015882.hd.mp4?s=a1321e6df42f072dc1a0c62018580a2b2387f402&amp;profile_id=174" 
          autoplay="autoplay" 
          loop="loop" 
          preload="auto" 
          muted="true" />
      </div>
    );
  }
}

class ImageTumbler extends Component {
  render() {
    return (
      <div class="tumbler">
        <div class="tumblerItem0" />
        <div class="tumblerItem1" />
        <div class="tumblerItem2" />
        <div class="tumblerItem3" />
        <div class="tumblerItem4" />
        <div class="tumblerCallout">
          <p class="heading">Reimagining the music experience</p>
          <p><button>see more</button></p>
        </div>
      </div>
    );
  }
}

class CloseupLight extends Component {
  render() {
    return (
      <div class="closeupLight">
        <p class="heading">What happened to great sound?</p>
        <p>
          Engineered in the tradition of the finest recording studio playback systems, 
          the Studio creates a pure sound akin to what engineers and musicians hear when 
          making their albums. Music emerges from a silent background - focused, powerful, 
          and emotionally direct.
        </p>
        <p><div class="closeupLightImage" /></p>
      </div>
    );
  }
}

function InSituImage(props) {
  return (
    <div class="inSituImage"><p class="heading">High-fidelity sound for a new generation</p></div>
  )
}

class CloseupDark extends Component {
  render() {
    return (
      <div class="closeupDark">
        <div class="closeupDarkImage" />
        <div class="closeupDarkText">
          <p class="heading">Embrace the darkness of the night</p>
          <p>
            Designed with the user's overall experience in mind, the Studio references the great
            industrial designers of generations past. Whether placed in a 1960s mid-century modern
            or digital space-age home, it suits any environment. With 4 aesthetic variations, pick
            the Studio that suits your life best.
          </p>
          <p><button>see more</button></p>
        </div>
      </div>
    )
  }
}

class GoogleIntegration extends Component {
  render() {
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
  }
}

class Acoustics extends Component {
  render() {
    return (
      <div class="acoustics">
        <div class="heading">Acoustics | Ultra High Fidelity</div>
        <div>
          The Studio 7 is constructed by using the best-in-class premium audio components, a
          high-quality build process and a meticulously-refined speaker enclosure. By joining
          those individual elements into one distinctly beautiful package, leeds was able to
          create a sound qualtity that is never heard before in the streaming speaker segment.
        </div>
        <div class="acousticsImage" />
      </div>
    );
  }
}

function InstantSetupStep(props) {
  return (
    <div class="instantSetupStep">
      <div class="heading">{props.stepNumber}</div>
      <div class={props.iconClass} />
    </div>
  )
}

class InstantSetup extends Component {
  render() {
    return (
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
  }
}

function FeatureGridItem(props) {
  const iconClass = props.iconClass + " featureGridItemIcon";
  return (
    <div class="featureGridItem">
      <div class={iconClass} />
      <div>{props.label}</div>
    </div>
  );
}

class MoreFeatures extends Component {
  render() {
    return (
      <div class="moreFeatures">
        <div class="heading">Even more features</div>
        <div class="featuresGrid">
          <div>
            <FeatureGridItem iconClass="angleAdjustIcon" label="Choose from 2 adjustable" />
            <FeatureGridItem iconClass="tunerIcon" label="Digitally tunes to" />
            <FeatureGridItem iconClass="pairIcon" label="Pair 2 speakers for" />
          </div>
          <div>
            <FeatureGridItem iconClass="streamSoftwareIcon" label="Stream" />
            <FeatureGridItem iconClass="turntableIcon" label="Turntable (AUX input)" />
            <FeatureGridItem iconClass="speakerGroupIcon" label="Group speakers" />
          </div>
        </div>
      </div> 
    );
  }
}

class JoinWaitlist extends Component {
  render() {
    return (
      <div class="joinWaitlist">
        <div><button>join the waitlist</button></div>
        <div class="frontFacingWhiteImage" />
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div class="footer">
        <ul class="unlist footerLinks">
          <li><span>Our Story</span></li>
          <li><span>Step Into the Studio</span></li>
          <li><span>Contact us</span></li>
        </ul>
        <div>Leeds Look Listen, Inc. 2018</div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <MenuBar />
        <VideoPlayer />
        <ImageTumbler />
        <CloseupLight />
        <InSituImage />
        <CloseupDark />
        <GoogleIntegration />
        <Acoustics />
        <InstantSetup />
        <MoreFeatures />
        <JoinWaitlist />
        <Footer />
      </div>
    );
  }
}

export default App;
