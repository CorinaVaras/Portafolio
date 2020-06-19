import React from 'react'
import '../assets/css/footer.css'

const Footer = () => {
    return (
        <div className='container-footer' id='footer'>

            <div className="social-networks">
            <a href="https://drive.google.com/file/d/1DnYXG4MtyEj_hN39twaOanb-kzqPWt8V/view?usp=sharing" target="_blank" title='CV' rel="noopener noreferrer">
              <span  className="fas fa-file-pdf" aria-hidden="true"></span>
            </a>
            
            <a href="https://github.com/CorinaVaras" target="_blank" title='Conoce mis proyectos' rel="noopener noreferrer">
              <span className="fab fa-github fa-fw" aria-hidden="true"></span>
            </a>{" "}
            <a href="https://www.linkedin.com/in/corinavaras/" target="_blank" title='Perfil profesional' rel="noopener noreferrer">
              <span className="fab fa-linkedin fa-fw" aria-hidden="true"></span>
            </a>{" "}
            <a href="mailto:corinacvp@gmail.com" target="_blank" title='Envíame un correo' rel="noopener noreferrer">
              <span className="fa fa-envelope-o fa-fw" aria-hidden="true"></span>
            </a>
            
          </div>
          

        <small>© 2020 Corina Varas Developer</small> 
            
        </div>
    )
}

export default Footer
