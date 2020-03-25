import React from "react";
import "../assets/css/proyects.css";
import BurgerQueen from "../assets/img/BurgerQueenn.png";
import TipsTech from "../assets/img/tipsTech.png";
import GoMovies from "../assets/img/goMovies.png";
import mdLinks from "../assets/img/mdLinks.png";
import chooseChampions from "../assets/img/chooseChampions.png";
import candado from "../assets/img/candado.png";

import { Card } from "react-bootstrap";

function proyects() {
  return (
    <div className="section-proyects">
      <div>
        <h1 className="proyects-title">Proyects</h1>
        <div className="proyects-hr">
          <hr />
        </div>
      </div>

      <div className="card-custom2" >
        <div className="card-custom" style={{cursor:'pointer'}} > 
          <div onClick={() => window.open=('https://burger-queen-f6c33.firebaseapp.com/','_blank')}>
            <Card style={{ width: "17rem" }}>
              <div className="text-center">
                <Card.Img
                  className="imgCard_"
                  variant="top"
                  src={BurgerQueen}
                />
              </div>
              <Card.Body>
                <Card.Title>Burger Queen</Card.Title >
                <Card.Text style={{ fontSize: 16 }}>
                  Burger Queen is a Progressive Web & Single Page App,
                  developed in React with Firebase integration. The purpose of the app is to agilize the
                  process of taking ordes in a Restaurant.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="card-custom" style={{cursor:'pointer'}}>
        <div onClick={() => window.open=('https://tipstech-c6fe7.firebaseapp.com/#/Inicio','_blank')}>
          <Card style={{ width: "17rem" }}>
            <div className="text-center">
              <Card.Img className="imgCard_2" variant="top" src={TipsTech} />
            </div>
            <Card.Body>
              <Card.Title>Tips Tech</Card.Title>
              <Card.Text style={{ fontSize: 16 }}>
                Tips Tech is a social network focused in a general public where you can find
                and share tips or offers in tech products that the market offers nowadays in the Internet.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        </div>
        <div className="card-custom" style={{cursor:'pointer'}}>
        <div onClick={() => window.open('https://corinavaras.github.io/proyecto-peliculas/src/','_blank')}>
          <Card style={{ width: "17rem" }}>
            <div className="text-center">
              <Card.Img className="imgCard_" variant="top" src={GoMovies} />
            </div>
            <Card.Body>
              <Card.Title>Go Movies</Card.Title>
              <Card.Text style={{ fontSize: 16 }}>
                I'ts a webapp that provides informaton about movies, mainly of the fantasy genre.
                Besides, it delivers content of the Fandom World of Science Fiction Films in the Internet.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        </div>
        <div className="card-custom" style={{cursor:'pointer'}}>
        <div onClick={() => window.open('https://www.npmjs.com/package/md-links-corina-varas','_blank')}>
          <Card style={{ width: "17rem" }}>
            <div className="text-center">
              <Card.Img className="imgCard_md" variant="top" src={mdLinks} />
            </div>
            <Card.Body>
              <Card.Title>MD-Links</Card.Title>
              <Card.Text style={{ fontSize: 16 }}>
                It's a librery that can be used to extract links from Markdown files,
                it makes the validation of the state of the links to find which links are ok and which are broken or do not exist.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        </div>
        <div className="card-custom" style={{cursor:'pointer'}}>
        <div onClick={() => window.open('https://rinarive.github.io/SCL012-data-lovers/src/','_blank')}>
          <Card style={{ width: "17rem" }}>
            <div className="text-center">
              <Card.Img
                className="imgCard_Lol"
                variant="top"
                src={chooseChampions}
              />
            </div>
            <Card.Body>
              <Card.Title>Choose Champions</Card.Title>
              <Card.Text style={{ fontSize: 16 }}>
                Choose Champions it's a mobile application that helps any League of Legends player, 
                here you can find a lot of necessary to be the best champin of the League.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        </div>
        <div className="card-custom" style={{cursor:'pointer'}}>
        <div onClick={() => window.open('https://corinavaras.github.io/SCL012-Cipher/src/','_blank')}>
          <Card style={{ width: "17rem" }}>
            <div className="text-center">
              <Card.Img
                className="imgCard_candado"
                variant="top"
                src={candado}
              />
            </div>
            <Card.Body>
              <Card.Title>Cipher</Card.Title>
              <Card.Text style={{ fontSize: 16 }}>
                It's a secret instant messaging app designed with the purpose of having a completely safe communication 
                without risks of leaks of the conversation, achieved by encrypting the messages end-to-end.
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default proyects;
