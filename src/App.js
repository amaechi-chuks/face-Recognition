//import all our components and react 
import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Logo from './components/Logo/Logo';
import Particles from 'react-particles-js';
import './App.css';

// declaring particles functionality
const particlesOptions = {
  particles: {
    number: {
      value: 90,
      density:{
      enable: true,
      value_area: 800,
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          }
        }
      }
      
      }
    }
    }
   }
//declaring our class 
class App extends Component {
  // creating a state for the App
  constructor(){
    super();
    this.state = {
      input: '', //what the user will input 
    }
  }
  onInputChange = (event) => {
console.log(event.target.value)
  }
  render() {
    return (
      <div className="App">
       <Particles className='particles'
              params={particlesOptions}
            	/>
        <Navigation />
         <Logo />
         <Rank />
         <ImageLinkForm  onInputChange={this.onInputChange}/> {/*passing onInputChange as a props */ }
         {/*
         <faceRecognition />*/}
      </div>
    );
  }
}

export default App;
