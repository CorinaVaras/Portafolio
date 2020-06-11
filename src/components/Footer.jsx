import React from 'react'
import '../assets/css/footer.css'

const Footer = () => {
    return (
        <div className='container-footer' id='footer'>

            <div className="social-networks">
            <a href="https://github.com/CorinaVaras" target="_blank" rel="noopener noreferrer">
              <span className="fab fa-github fa-fw" aria-hidden="true"></span>
            </a>{" "}
            <a href="https://www.linkedin.com/in/corinavaras/" target="_blank" rel="noopener noreferrer">
              <span className="fab fa-linkedin fa-fw" aria-hidden="true"></span>
            </a>{" "}
            <a href="mailto:corinacvp@gmail.com">
              <span className="fa fa-envelope-o fa-fw" aria-hidden="true"></span>
            </a>
          </div>

        <p>© 2020 Corina Varas Developer</p> 
            
        </div>
    )
}

export default Footer
