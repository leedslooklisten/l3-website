import React, { Component } from 'react';
import './MenuBar.css';

function HamburgerNav(props) {
  return (
    <div className="hamburgerNav" />
  );
}

class MenuBarButton extends Component {
  render() {
    return (
      <div className="menuBarButton">
        <div>
          {this.props.label}
        </div>
      </div>
    );
  }
}

class MenuBar extends Component {
  render() {
    return (
      <div className="menuBar">
        <div>
          <div className="leftMenuBarButtons">
            <HamburgerNav />
            <MenuBarButton label='home' />
            <MenuBarButton label='step into the studio' />
            <MenuBarButton label='our story' />
          </div>
        </div>
        <div>
          <div className="menuBarLogo" />
          <div className="rightMenuBarButtons">
            <div className="placeholderRightButton" />
          </div>
        </div>
      </div>
    )
  }
}

export default MenuBar;