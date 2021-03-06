import './assets/stylesheets/App.css';
import Splash from './javascripts/splash.jsx'
import Projects from './javascripts/projects.jsx'
import Video from './javascripts/video.jsx'
import React, { useState, useEffect } from 'react';

function App() {

  return (
    <div className="App">
      <div className='main-1'>
        <Splash/>
      </div>
      <div className='main-2'>
        <Projects/>
      </div>
      <div className='main-3'>
        <Video />
      </div>
    </div>
  );
}

export default App;
