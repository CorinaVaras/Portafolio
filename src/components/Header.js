import React from "react";
import "../assets/css/header.css";
import avatar from "../assets/img/cori3cm.png";
import TypedText from "./TypedText";

function header() {
  return (
    <div className="section-name">
      <div>
        <img className="_avatar" alt="foto de corina" src={avatar} />
      </div>
      <div style={{marginLeft: '2rem'}}>
        <div className='title_'>
          <TypedText
            String={[
              "I'm Corina Varas",
              "I love <strong>JavaScript</strong>",
              "I love <strong>Web Design</strong>",
              "I love <strong>Agile Methodology</strong>",
              "I'm Corina Varas"
            ]}
          />
        </div>
        <div className="titulo1">
          <p>I'm a software engineer with a passion for building exciting experiences on the web.{" "}</p>
        </div>
        <div className="social-networks">
          <a className="social-icon" href="https://github.com/CorinaVaras" target="_blank" rel="noopener noreferrer">
            <span className="fab fa-github fa-fw" aria-hidden="true"></span>
          </a>{" "}
          <a className="social-icon" href="https://www.linkedin.com/in/corinavaras/" target="_blank" rel="noopener noreferrer">
            <span className="fab fa-linkedin fa-fw" aria-hidden="true"></span>
          </a>{" "}
          <a className="social-icon" href="mailto:corinacvp@gmail.com">
            <span className="fa fa-envelope-o fa-fw" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </div>
    
  );
}

export default header;
