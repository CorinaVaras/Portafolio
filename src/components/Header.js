import React from "react";
import "../assets/css/header.css";
import avatar from "../assets/img/corina.JPG";
import TypedText from "./TypedText";


function header() {
  return (
    <div className="section-name">
      <div>
        <img className="_avatar" alt="" src={avatar} />
      </div>
      <div>
        <div>
          <TypedText
            String={[
              "I'am Corina Varas",
              "I love <strong>JavaScript</strong>",
              "I love <strong>Web Design</strong>",
              "I love <strong>Agile Methodology</strong>"
            ]}
          />
        </div>
        <div className="titulo1">
          <p>
            I'm a software engineer with a passion for building exciting
            experiences on the web.{" "}
          </p>
        </div>
        <div className="social-networks">
          <a
            className="social-icon"
            href="https://github.com/CorinaVaras"
            target="_blank"
          >
            <span class="fab fa-github fa-fw" aria-hidden="true"></span>
          </a>{" "}
          <a
            className="social-icon"
            href="https://twitter.com/CorinaVaras"
            target="_blank"
          >
            <span class="fab fa-twitter fa-fw" aria-hidden="true"></span>
          </a>{" "}
          <a
            className="social-icon"
            href="https://cl.linkedin.com/in/corina-varas-80a50a19a?trk=public_profile_samename_profile_profile-result-card_result-card_full-click"
            target="_blank"
          >
            <span class="fab fa-linkedin fa-fw" aria-hidden="true"></span>
          </a>{" "}
          <a className="social-icon" href="mailto:corinacvp@gmail.com">
            <span class="fa fa-envelope-o fa-fw" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </div>
    
  );
}

export default header;
