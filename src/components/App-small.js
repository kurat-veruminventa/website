import React, {Component} from 'react';
import './particles-1.css';
import Particles from 'react-particles-js';



const particleOpt = {
        particles: {
            number: {
                value: 60,
                density: {
                    enable: true,
                    value_area: 500
                }
            },
            size: {
                value: 1
            }
        },
        interactivity: {
            detect_on: "window",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                grab: {
                    distance: 250,
                    line_linked: {
                        opacity: 0.5
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
