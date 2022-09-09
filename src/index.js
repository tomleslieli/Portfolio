import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import NavBar from './javascripts/navbar.jsx'
import Mobile from './javascripts/mobile.jsx'
import './assets/stylesheets/index.css';
import './assets/stylesheets/reset.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Mobile />
    <App />
  </React.StrictMode>
);
