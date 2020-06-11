import React from "react";
import "../assets/css/projects.css";
import here from '../assets/img/here.png'
import tenpo from '../assets/img/tenpo.svg'
import chooseChampions from "../assets/img/lol.png";
import redsocial from '../assets/img/redsocial.svg';


const Projects = () => {
    return (
        <>
        <div className='prueba'>
                <h1 className="proyects-title">Projects</h1>
                <div className="proyects-hr"></div>

            <div className='cards-container'>
                <figure className="snip1383"><img className="logo-fix" src="https://raw.githubusercontent.com/CorinaVaras/Globant-Hackthon/master/src/img/logo1.png" alt="Share Food" />
                    <figcaption>
                        <span>Share Food</span>
                        <p>Mobile app to donate and share the food you have at home and you're not goint to eat.</p>
                            <div className='btn-repo-container'>
                            <i onClick={() => window.open('https://globant-hackathon.web.app/','_blank')} className="fas fa-mobile-alt"></i>
                            <i onClick={() => window.open('https://github.com/CorinaVaras/Globant-Hackthon','_blank')} className="fas fa-code"></i>
                            </div>
                    </figcaption>
                </figure>

                <figure className="snip1383"><img src="https://raw.githubusercontent.com/CorinaVaras/SCL012-Social-Network-Frameworks/master/src/assets/image/logoMD.png" alt="Red social" />
                    <figcaption>
                        <span>Red Social</span>
                        <p>Social network to post your beauty tips on makeup and skin care routines.</p>
                            <div className='btn-repo-container'>
                            <i onClick={() => window.open('https://redsocial-makeup.web.app/','_blank')} className="fas fa-mobile-alt"></i>
                            <i onClick={() => window.open('https://github.com/CorinaVaras/SCL012-Social-Network-Frameworks','_blank')} className="fas fa-code"></i>
                            </div>
                    </figcaption>
                </figure>

                <figure className="snip1383"><img src={tenpo} alt="Tenpo" />
                    <figcaption>
                        <span>Tenpo</span>
                        <p>Accesibility upgrade for people with disabilities in the financial app web login system.</p>
                            <div className='btn-repo-container'>
                            <i onClick={() => window.open('https://tenpo-hackathon.web.app/','_blank')} className="fas fa-mobile-alt"></i>
                            <i onClick={() => window.open('https://github.com/CorinaVaras/scl012-tenpo','_blank')} className="fas fa-code"></i>
                            </div>
                    </figcaption>
                </figure>

                <figure className="snip1383"><img src="https://raw.githubusercontent.com/CorinaVaras/SCL012-burger-queen/master/src/imagenes/logo.png" alt="Burger Queen" />
                    <figcaption>
                        <span>Burger Queen</span>
                        <p>The app purpose is to agilize the process of taking orders in a Restaurant.</p>
                            <div className='btn-repo-container'>
                            <i onClick={() => window.open('https://burger-queen-f6c33.firebaseapp.com/','_blank')} className="fas fa-mobile-alt"></i>
                            <i onClick={() => window.open('https://github.com/CorinaVaras/SCL012-burger-queen','_blank')} className="fas fa-code"></i>
                            </div>
                    </figcaption>
                </figure>

                <figure className="snip1383"><img className="logo-fix" src="https://raw.githubusercontent.com/CorinaVaras/Tic-Tac-Toe/master/assets/img1.png" alt="Tic Tac Toe" />
                    <figcaption>
                        <span>Tic Tac Toe</span>
                        <p>Classic tic tac toe game for kids developed with react native.</p>
                            <div className='btn-repo-container'>
                            <i onClick={() => window.open('https://github.com/CorinaVaras/Tic-Tac-Toe','_blank')} className="fas fa-mobile-alt"></i>
                            <i onClick={() => window.open('https://github.com/CorinaVaras/Tic-Tac-Toe','_blank')} className="fas fa-code"></i>
                            </div>
                    </figcaption>
                </figure>

                <figure className="snip1383"><img src={here} alt="Moov" />
                    <figcaption>
                        <span>Moov</span>
                        <p>App focused on accessible tourism in Chile for disabled tourists with reduced mobility.</p>
                            <div className='btn-repo-container'>
                            <i onClick={() => window.open('https://moov-8e44e.web.app/','_blank')} className="fas fa-mobile-alt"></i>
                            <i onClick={() => window.open('https://github.com/CorinaVaras/moov','_blank')} className="fas fa-code"></i>
                            </div>                    
                    </figcaption>
                </figure>

                <figure className="snip1383"><img src='https://raw.githubusercontent.com/CorinaVaras/marcy-foods/master/src/assets/img/logo.png' alt="Marcy Foods" />
                    <figcaption>
                        <span>Marcy Foods</span>
                        <p>Landing page of a small business about venezuelan food and cakes.</p>
                            <div className='btn-repo-container'>
                            <i onClick={() => window.open('https://marcy-foods.web.app/','_blank')} className="fas fa-mobile-alt"></i>
                            <i onClick={() => window.open('https://github.com/CorinaVaras/marcy-foods','_blank')} className="fas fa-code"></i>
                            </div>
                    </figcaption>
                </figure>

                <figure className="snip1383"><img  className="logo-fix" src={redsocial} alt="Tips Tech" />
                    <figcaption>
                        <span>Tips Tech</span>
                        <p>Technological social network where you can post and get offers about technology.</p>
                            <div className='btn-repo-container'>
                            <i onClick={() => window.open('https://tipstech-c6fe7.firebaseapp.com/#/Inicio','_blank')} className="fas fa-mobile-alt"></i>
                            <i onClick={() => window.open('https://github.com/CorinaVaras/SCL012-Social-Network','_blank')} className="fas fa-code"></i>
                            </div>
                    </figcaption>
                </figure>

                <figure className="snip1383"><img className="logo-fix-lol" src={chooseChampions} alt="Choose Champ" />
                    <figcaption>
                        <span>Choose Champ</span>
                        <p>It's a mobile application to help any League of Legends player find more info related to the game.</p>
                            <div className='btn-repo-container'>
                            <i onClick={() => window.open('https://rinarive.github.io/SCL012-data-lovers/src/','_blank')} className="fas fa-mobile-alt"></i>
                            <i onClick={() => window.open('https://github.com/CorinaVaras/SCL012-data-lovers','_blank')} className="fas fa-code"></i>
                            </div>                    
                    </figcaption>
                </figure>

            </div>
        </div>
        </>
  );
};

export default Projects;
