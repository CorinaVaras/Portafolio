import React from "react";
import "../assets/css/tripavisor.css";
import expo from "../assets/img/expo.png";
import github from "../assets/img/github-1.png";
import restaurant from "../assets/img/imgPortafolio.png";

const TripAvisor = () => {
  return (
    <div className="card">
      <div className="card-fist">
        <img src={restaurant} alt="Restaurants" />
      </div>
      <div className="card-second">
        <p>
          It is a restaurant tripavisor where you can publish your restaurant to
          get more customers or consume the restaurants published there. You can
          choose the restaurant that you like the most as a favorite, you can
          see the section of the top 5 restaurants and you can send reviews of
          the restaurants where you have eaten if you wish.
        </p>
        <div>
          <img
            onClick={() =>
              window.open(
                "https://github.com/CorinaVaras/Tic-Tac-Toe",
                "_blank"
              )
            }
            src={expo}
          />
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
    </div>
  );
};

export default TripAvisor;
