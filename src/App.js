import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './MenuBar';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
  }

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
  constructor(props) {
    super(props);
  }

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
  constructor(props) {
    super(props);
  }

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

class App extends Component {
  render() {
    return (
      <div>
        <MenuBar />
        <VideoPlayer />
        <ImageTumbler />
        <CloseupLight />
        <div class="inSituImage"><p class="heading">High-fidelity sound for a new generation</p></div>
        <div class="closeupDark">
          <div class="closeupDarkImage" />
          <div class="closeupDarkText">
            <p class="heading">Embrace the darkness of</p>
            <p>
              Designed with the user's overall experience in mind, the Studio references the great
              industrial designers of generations past. Whether placed in a 1960s mid-century modern
              or digital space-age home, it suits any environment. With 4 aesthetic variations, pick
              the Studio that suits your life best.
            </p>
            <p><button>see more</button></p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
