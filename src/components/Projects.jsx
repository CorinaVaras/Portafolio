import React from "react";
import "../assets/css/projects.css";
import here from "../assets/img/here.png";
import tenpo from "../assets/img/tenpo.svg";
import redsocial from "../assets/img/redsocial.svg";
import tripAvisor from "../assets/img/imgPortafolio.png";

const Projects = () => {
  return (
    <>
      <div className="container-projects" id="projects">
        <h2 className="proyects-title">Projects</h2>
        <div className="custom-hr"></div>

        <div className="card">
          <img src={tripAvisor} alt="Restaurants" />
          <div>
            <p>
              Why do we use it? It is a long established fact that a reader will
              be distracted by the readable content of a page when looking at
              its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
            <div className="btn-repo-container">
              <i
                onClick={() =>
                  window.open(
                    "https://github.com/CorinaVaras/Tic-Tac-Toe",
                    "_blank"
                  )
                }
                className="fas fa-mobile-alt"
              ></i>
              <i
                onClick={() =>
                  window.open(
                    "https://github.com/CorinaVaras/Tic-Tac-Toe",
                    "_blank"
                  )
                }
                className="fas fa-code"
              ></i>
            </div>
          </div>
        </div>

        <div className="card">
          <div>
            <p>
              Why do we use it? It is a long established fact that a reader will
              be distracted by the readable content of a page when looking at
              its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
            <div className="btn-repo-container">
              <i
                onClick={() =>
                  window.open(
                    "https://github.com/CorinaVaras/Tic-Tac-Toe",
                    "_blank"
                  )
                }
                className="fas fa-mobile-alt"
              ></i>
              <i
                onClick={() =>
                  window.open(
                    "https://github.com/CorinaVaras/Tic-Tac-Toe",
                    "_blank"
                  )
                }
                className="fas fa-code"
              ></i>
            </div>
          </div>
          <img src={here} alt="Movilidad reducida" />
        </div>
      </div>

      {/* <div className="cards-container">
          <div>
            <div className="container-text">
            </div>
          </div> */}

      {/* <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "50%", padding: "15px" }}>
              <p style={{ color: "#a3a3a5", fontSize: "20px" }}>
                Why do we use it? It is a long established fact that a reader
                will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it
                has a more-or-less normal distribution of letters, as opposed to
                using 'Content here, content here', making it look like readable
                English. Many desktop publishing packages and web page editors
                now use Lorem Ipsum as their default model text, and a search
                for 'lorem ipsum' will uncover many web sites still in their
                infancy. Various versions have evolved over the years, sometimes
                by accident, sometimes on purpose (injected humour and the
                like).
              </p>
            </div>
            <figure className="snip1383">
              <img
                className="logo-fix"
                src="https://raw.githubusercontent.com/CorinaVaras/Tic-Tac-Toe/master/assets/img1.png"
                alt="Tic Tac Toe"
              />
              <figcaption>
                <span>Tic Tac Toe</span>
                <p>
                  Classic tic tac toe game for kids developed with react native.
                </p>
                <div className="btn-repo-container">
                  <i
                    onClick={() =>
                      window.open(
                        "https://github.com/CorinaVaras/Tic-Tac-Toe",
                        "_blank"
                      )
                    }
                    className="fas fa-mobile-alt"
                  ></i>
                  <i
                    onClick={() =>
                      window.open(
                        "https://github.com/CorinaVaras/Tic-Tac-Toe",
                        "_blank"
                      )
                    }
                    className="fas fa-code"
                  ></i>
                </div>
              </figcaption>
            </figure>
          </div> */}

      {/* <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ width: "50%", padding: "15px" }}>
              <p style={{ color: "#a3a3a5", fontSize: "20px" }}>
                Why do we use it? It is a long established fact that a reader
                will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it
                has a more-or-less normal distribution of letters, as opposed to
                using 'Content here, content here', making it look like readable
                English. Many desktop publishing packages and web page editors
                now use Lorem Ipsum as their default model text, and a search
                for 'lorem ipsum' will uncover many web sites still in their
                infancy. Various versions have evolved over the years, sometimes
                by accident, sometimes on purpose (injected humour and the
                like).
              </p>
            </div>

            <img style={{ width: "500px" }} src={here} alt="Moov" />
          </div>
        </div> */}

      {/* 
          <figure className="snip1383">
            <img
              src="https://raw.githubusercontent.com/CorinaVaras/SCL012-Social-Network-Frameworks/master/src/assets/image/logoMD.png"
              alt="Red social"
            />
            <figcaption>
              <span>Red Social</span>
              <p>
                Social network to post your beauty tips on makeup and skin care
                routines.
              </p>
              <div className="btn-repo-container">
                <i
                  onClick={() =>
                    window.open("https://redsocial-makeup.web.app/", "_blank")
                  }
                  className="fas fa-mobile-alt"
                ></i>
                <i
                  onClick={() =>
                    window.open(
                      "https://github.com/CorinaVaras/SCL012-Social-Network-Frameworks",
                      "_blank"
                    )
                  }
                  className="fas fa-code"
                ></i>
              </div>
            </figcaption>
          </figure>

          <figure className="snip1383">
            <img
              src="https://raw.githubusercontent.com/CorinaVaras/SCL012-burger-queen/master/src/imagenes/logo.png"
              alt="Burger Queen"
            />
            <figcaption>
              <span>Burger Queen</span>
              <p>
                The app purpose is to agilize the process of taking orders in a
                Restaurant.
              </p>
              <div className="btn-repo-container">
                <i
                  onClick={() =>
                    window.open(
                      "https://burger-queen-f6c33.firebaseapp.com/",
                      "_blank"
                    )
                  }
                  className="fas fa-mobile-alt"
                ></i>
                <i
                  onClick={() =>
                    window.open(
                      "https://github.com/CorinaVaras/SCL012-burger-queen",
                      "_blank"
                    )
                  }
                  className="fas fa-code"
                ></i>
              </div>
            </figcaption>
          </figure>

          <figure className="snip1383">
            <img
              className="logo-fix"
              src="https://raw.githubusercontent.com/CorinaVaras/Globant-Hackthon/master/src/img/logo1.png"
              alt="Share Food"
            />
            <figcaption>
              <span>Share Food</span>
              <p>
                Mobile app to donate and share the food you have at home and
                you're not goint to eat.
              </p>
              <div className="btn-repo-container">
                <i
                  onClick={() =>
                    window.open("https://globant-hackathon.web.app/", "_blank")
                  }
                  className="fas fa-mobile-alt"
                ></i>
                <i
                  onClick={() =>
                    window.open(
                      "https://github.com/CorinaVaras/Globant-Hackthon",
                      "_blank"
                    )
                  }
                  className="fas fa-code"
                ></i>
              </div>
            </figcaption>
          </figure>

          <figure className="snip1383">
            <img src={tenpo} alt="Tenpo" />
            <figcaption>
              <span>Tenpo</span>
              <p>
                Accesibility upgrade for people with disabilities in the
                financial app web login system.
              </p>
              <div className="btn-repo-container">
                <i
                  onClick={() =>
                    window.open("https://tenpo-hackathon.web.app/", "_blank")
                  }
                  className="fas fa-mobile-alt"
                ></i>
                <i
                  onClick={() =>
                    window.open(
                      "https://github.com/CorinaVaras/scl012-tenpo",
                      "_blank"
                    )
                  }
                  className="fas fa-code"
                ></i>
              </div>
            </figcaption>
          </figure>

          <figure className="snip1383">
            <img
              src="https://raw.githubusercontent.com/CorinaVaras/marcy-foods/master/src/assets/img/logo.png"
              alt="Marcy Foods"
            />
            <figcaption>
              <span>Marcy Foods</span>
              <p>
                Landing page of a small business about venezuelan food and
                cakes.
              </p>
              <div className="btn-repo-container">
                <i
                  onClick={() =>
                    window.open("https://marcy-foods.web.app/", "_blank")
                  }
                  className="fas fa-mobile-alt"
                ></i>
                <i
                  onClick={() =>
                    window.open(
                      "https://github.com/CorinaVaras/marcy-foods",
                      "_blank"
                    )
                  }
                  className="fas fa-code"
                ></i>
              </div>
            </figcaption>
          </figure> */}
      {/* </div> */}
    </>
  );
};

export default Projects;
