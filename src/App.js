import React, { Component } from 'react';
import './App.css';
import MenuBar from './MenuBar';
import HomePage from './pages/HomePage';
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <div>
        <MenuBar/>
        <HomePage/>
        <Footer/>
      </div>
    );
  }
}

export default App;