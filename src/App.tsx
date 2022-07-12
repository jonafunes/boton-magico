import React from 'react';
import cone from './assets/images/cone.png';
import icosahedron from './assets/images/icosahedron.png';
import sphere from './assets/images/sphere.png';
import torus from './assets/images/torus.png';
import './App.css';

function App() {
  return (
    <body>
      <a href="/" className="button">
        <span className="button__text">
          play
        </span>
        <img src={cone} className="button__cone" alt="cone" />
        <img src={torus} className="button__torus" alt="torus" />
        <img src={icosahedron} className="button__icosahedron" alt="icosahedron" />
        <img src={sphere} className="button__sphere" alt="sphere" />
      </a>
    </body>
  );
}

export default App;
