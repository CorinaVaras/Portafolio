import React from "react";
import "../assets/css/header.css";
import avatar from "../assets/img/cori3cm.png";
import TypedText from "./TypedText";

function header() {
  return (
    <div className="section-name" id='header'>

        <img className="_avatar" alt="foto de corina" src={avatar} />

        <div className='title_'>
          <p>Corina Varas</p>
          <TypedText String={["I'm Frontend Developer", "I love <strong>JavaScript</strong>", "I love <strong>Web Design</strong>", "I love <strong>Agile Methodology</strong>", "Love coding", "I'm Frontend Developer"]}/>
          
        </div>

        



    </div>
    
  );
}

export default header;
