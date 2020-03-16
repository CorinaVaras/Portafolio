import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header'
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Proyects from './components/Proyects'

function App() {
  return (
      <div className="App">
        <Header/>
        <AboutMe/>
        <Skills/>
        <Proyects/>
      </div>

   
  );
}

export default App;
