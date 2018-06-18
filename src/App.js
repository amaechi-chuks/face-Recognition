import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Logo from './components/Logo/Logo';
import Particles from 'react-particles-js';
import './App.css';


const particlesOptions = {
  particles: {
    number: {
      value: 90,
      density:{
      enable: true,
      value_area: 800
      
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        }
      },
    }
    
  },
  
    }

class App extends Component {
  render() {
    return (
      <div className="App">
       <Particles className='particles'
              params={particlesOptions}
            	/>
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
