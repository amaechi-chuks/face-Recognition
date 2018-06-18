import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Logo from './components/Logo/Logo';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
         <Logo />
         <Rank />
         <ImageLinkForm />
         {/*
         <faceRecognition />*/}
      </div>
    );
  }
}

export default App;
