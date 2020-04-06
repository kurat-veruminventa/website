import React, {Component} from 'react';
import './particles-1.css';
import Particles from 'react-particles-js';



const particleOpt = {
        particles: {
            number: {
                value: 50,
                density: {
                    enable: true,
                    value_area: 500
                }
            }
        },
        interactivity: {
            dectects_on: "window",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                grab: {
                    distance: 150,
                    line_linked: {
                        opacity: 1
                    }
                }
            }
        }
}



class App extends Component {
    render() {
        return (
            <div class='particle-container'>
                <Particles
                    params={particleOpt}
                />
            </div>
        )
    }
}

export default App;
