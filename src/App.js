//import all our components and react 
import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Logo from './components/Logo/Logo';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'bc14a49b4cfe445593213a6095ac1f5f'
 });

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
  onButtonSubmit = () => {
    console.log('click');
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      console.log(response);
      // do something with response
    },
    function(err) {
      // there was an error
    }
  );
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
         <ImageLinkForm  onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/> {/*passing onInputChange as a props */ }
         {/*
         <faceRecognition />*/}
      </div>
    );
  }
}

export default App;
