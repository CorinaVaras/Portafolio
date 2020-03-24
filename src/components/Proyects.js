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
                  Burger Queen es una Progressive Web & Single Page App,
                  desarrollada en React con integración de Firebase. Busca como
                  objetivo agilizar el proceso de toma de pedidos de un
                  restaurant.
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
                Tips Tech es una red social enfocada a un público general en
                donde podrás encontrar y compartir tips de ofertas en productos
                tecnológicos que ofrece el mercado hoy en día a través de
                internet.{" "}
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
                Es una webapp que provee informacion sobre peliculas,
                principalmente del genero fantastico. Ademas entrega contenido
                sobre el mundo Fandom del cine de Ciencia ficcion en internet.
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
                Es una libreria que puede ser utilizada para extraer links de
                archivos Markdown, hace la válidación del estado de los enlaces
                encontrados lo cuál permite conocer si un enlace existe o si
                esta roto.
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
                Choose Champions es una aplicación móvil de ayuda para cualquier
                jugador de League of Legends, aquí podrás encontrar mucha
                información necesaria para poder ser el mejor campeón de la
                grieta.
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
                Es una mensajería secreta diseñada con el propósito de tener una
                comunicación totalmente segura sin riegos de que la comunicación
                pueda ser divulgada o vista por personas ajenas a ella.
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
