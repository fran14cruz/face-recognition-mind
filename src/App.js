import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Registration from './components/Registration/Registration';
import ParticlesCmp from './components/ParticlesCmp/ParticlesCmp';
//import Clarifai from 'clarifai';

// const app = new Clarifai.App({
//   apiKey: '105b4021b51a4fc1a9e02031329bddc9'
//  });

const initialState = {
  input: '',
  route: 'signin',
  isSignedIn: false,
  imageUrl: '',
  box: {},
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
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
    if (route === 'signout') {
      this.setState(initialState);
    } else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  }

  loadUser = (data) => {
    this.setState({ user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  render() {
    const { isSignedIn, route } = this.state;
    return (
      <div className='App'>
        <ParticlesCmp className='particles' />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
        { route === 'home'
          ? <div>
              <Logo /> 
              <Rank />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
              <FaceRecognition />
            </div>
          : (
            route === 'signin'
            ? <Signin
                onRouteChange={this.onRouteChange}
                loadUser={this.loadUser}
              />
            : <Registration
                onRouteChange={this.onRouteChange}
                loadUser={this.loadUser}
              />
          )
        }
      </div>
    );    
  }
}

export default App;
