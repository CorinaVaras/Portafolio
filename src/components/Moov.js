import React from "react";
import "../assets/css/moov.css";
import moov from "../assets/img/here.png";
import github from "../assets/img/github-1.png";

const Moov = () => {
  return (
    <div className="container-card">
      <div className="card-one">
        <p>
          Moov in a mobile application created with the aim of promoting
          inclusive tourism in Chile, for people with reduced mobility. In it
          you can find great and beautiful inclusive tourist places of Chile
          ideal to be visited by people specifically in wheelchairs.
        </p>
        <div>
          <i
            onClick={() =>
              window.open(
                "https://github.com/CorinaVaras/Tic-Tac-Toe",
                "_blank"
              )
            }
            className="fas fa-mobile-alt"
          ></i>
          <img
            style={{ width: "45px", marginLeft: "1em" }}
            onClick={() =>
              window.open(
                "https://github.com/CorinaVaras/Tic-Tac-Toe",
                "_blank"
              )
            }
            src={github}
          />
        </div>
      </div>
      <div className="card-two">
        <img src={moov} />
      </div>
    </div>
  );
};

export default Moov;
