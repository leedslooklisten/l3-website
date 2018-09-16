import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
            <Link to="/"><MenuBarButton label='home' /></Link>
            <Link to="/stepintothestudio"><MenuBarButton label='step into the studio' /></Link>
            <Link to="/story"><MenuBarButton label='our story' /></Link>
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