import React from "react";
import Particles from "react-particles-js";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects.jsx";
import NavBar from './components/Navbar'
import Footer from './components/Footer'

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
        "color": "#ff0000"
      },
      "polygon": {
        "nb_sides": 5
      },
    },
    "opacity": {
      "value": 0.5211089197812949,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 2,
        "opacity_min": 0.1,
        "sync": false
      }
    },
   
    "line_linked": {
      "enable": true,
      "distance": 160,
      "color": "#969696",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
    }
  },
 
};

function App() {
  return (
    <div className="App" >
      <NavBar/>
      <Particles
        className="particle_"
        params={particleOpt}
      />
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
