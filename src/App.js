import './App.css';
import Particles from '@tsparticles/react';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

const particlesOptions = {
  polygon: {
      enable: true,
      type: 'inside',
      move: { radius: 10 },
      url: 'path/to/svg.svg'
  }
}

function App() {
  return (
    <div className='App'>
      <Particles classNname='particles'
        params={particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*<FaceRecognition /> */}
    </div>
  );
}

export default App;
