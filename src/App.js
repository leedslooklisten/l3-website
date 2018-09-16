import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import MenuBar from './components/MenuBar'
import HomePage from './pages/HomePage';
import StepIntoTheStudio from './pages/StepIntoTheStudio';
import OurStory from './pages/OurStory';
import PageNotFound from './pages/PageNotFound';
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <MenuBar/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/stepintothestudio" component={StepIntoTheStudio} />
          <Route path="/ourstory" component={OurStory} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;