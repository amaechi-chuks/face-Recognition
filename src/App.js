
//import all our components and react 
import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Rank from './components/Rank/Rank';
import Footer from './components/Footer/Footer';
import Logo from './components/Logo/Logo';
import Particles from 'react-particles-js';
import './App.css';



// declaring particles functionality
const particlesOptions = {
  particles: {
    number: {
      value: 90,
      density: {
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

//creating an initial state 
const initialState = {
  input: '', //what the user will input 
  imageUrl: '',
  box: {},
  route: 'SignIn',
  isSignIn: false,
   user:{
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined:''
   }
}
//declaring our class 
class App extends Component {
  // creating a state for the App
  constructor() {
    super();
    this.state = initialState;
  }
  
  //loading a user from front-end
  loadUser = (data) => {
    this.setState({user:{
             id: data.id,
            name: data.name,
            email: data.email,
            entries: data.entries,
            joined: data.joined
    }})
      }

//image calculation(width, height)
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }
  displayFaceBox = (box) => {
    this.setState({ box: box })
    
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onButtonSubmit = () => {
    
    this.setState({ imageUrl: this.state.input });
    fetch('https://enigmatic-anchorage-42420.herokuapp.com/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        input: this.state.input
        
    })
  })
  .then(response => response.json())
      .then(response => {  
        if(response){
          fetch('https://enigmatic-anchorage-42420.herokuapp.com/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
              
          })
        })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, { entries: count }))
        })
        //.catch(console.log)
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
        
        
      })
      .catch(err => console.log(err))
  }
onRouteChange = (route) => {
  if(route === 'signOut'){
    this.setState(initialState)
  }else if (route === 'home') {
    this.setState({isSignIn: true})
  }
  this.setState({route: route})
}
  render() {
    const { isSignIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation isSignIn={isSignIn} onRouteChange={this.onRouteChange}/>
        {  route === 'home'
        ?<div>
        <Logo />
        <Rank 
          name = {this.state.user.name}
          entries = {this.state.user.entries}
        />
        <ImageLinkForm
         onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition box={box} imageUrl={imageUrl} />
        </div>
        :(
           this.state.route === 'SignIn'
           ?<SignIn loadUser={this.loadUser} onRouteChange = {this.onRouteChange}/>
           :<Register loadUser ={this.loadUser} onRouteChange = {this.onRouteChange}/>
        )
        }
      <Footer />
      </div>
    );
  }
}

export default App;



