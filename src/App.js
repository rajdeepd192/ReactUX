import React from 'react'

import Headercomp from './components/header';
import Footercomp from './components/Footer';
import LandingPage from './components/landingpage';

import './App.css';


function App() {
  return (
    <React.Fragment>
      <Headercomp/>
      <LandingPage/>
      <Footercomp/>
    </React.Fragment>
  );
}

export default App;
