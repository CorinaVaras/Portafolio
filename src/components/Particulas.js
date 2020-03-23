import React, { Component } from 'react';

class Particulas extends Component {


    componentDidMount = () => {
        /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
        particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
      });

    }


    render() {
        return (
            <div id="particles-js">
                
            </div>
        );
    }
}

export default Particulas;