import React from 'react';
import { Tilt } from 'react-tilt';
import './Logo.css';
import mind from './mind.png'

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className='Tilt br2 shadow-2' options={{ max: 55 }} style={{ height: 150, width: 150 }}>
        <div className='Tilt-inner pa4'>
          <img style={{paddingTop: '5px'}} src={mind} alt='mind'></img>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;