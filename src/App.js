import React, { Fragment } from "react";
import Particles from "react-particles-js";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Proyects from "./components/Proyects";

const particleOpt = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#bfbebe"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000"
      }
    },
    "opacity": {
      "value": 0.5211089197812949,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
   
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#969696",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
    }
  },
 
};

function App() {
  return (
    <div className="App" >
      <Particles
        className="particle_"
        params={particleOpt}
      />
      <Header />
      <AboutMe />
      <Skills />
      <Proyects />
    </div>
  );
}

export default App;
