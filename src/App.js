import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import ParticlesCmp from './components/ParticlesCmp/ParticlesCmp';
//import Clarifai from 'clarifai';

// const app = new Clarifai.App({
//   apiKey: '105b4021b51a4fc1a9e02031329bddc9'
//  });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      route: 'signin'
    }
  }

  onInputChange = (event) => {

  }

  onButtonSubmit = () => {
    console.log('hey');
    // app.models.predict("105b4021b51a4fc1a9e02031329bddc9", "https://samples.clarifai.com/face-det.jpg").then(
    //   function(response) {
    //     console.log(response);
    //   },
    //   function(error) {

    //   }
    // );
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  }

  render() {
  return (
    <div className='App'>
      <ParticlesCmp className='particles' />
      <Navigation onRouteChange={this.onRouteChange}/>
      { this.state.route === 'signin'
        ? <Signin onRouteChange={this.onRouteChange} />
        : <div>
            <Logo /> 
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition />
        </div>
      }
    </div>
  );    
  }
}

export default App;
