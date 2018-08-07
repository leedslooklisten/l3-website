import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function HamburgerNav(props) {
  return (
    <div class="hamburgerNav" />
  );
}

class MenuBarButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="menuBarButton"><div>{this.props.label}</div></div>
    );
  }
}

class MenuBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="menuBar">
        <div class="leftMenuBarButtons">
          <HamburgerNav />
          <MenuBarButton label='home' />
          <MenuBarButton label='step into the studio' />
          <MenuBarButton label='our story' />
        </div>
        <div class="menuBarLogo" />
        <div class="rightMenuBarButtons">
          <div class="placeholderRightButton" />
        </div>
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <MenuBar />
    );
  }
}

export default App;
