import React, {Component} from 'react';
import './particles-1.css';
import Particles from 'react-particles-js';



const particleOpt = {
        particles: {
            number: {
                value: 30,
                density: {
                    enable: true,
                    value_area: 500
                }
            },
            move: {
                speed: 3,
            },
            size: {
                value: 1,
            },
            opacity: {
                value: 0.4,
            },
            line_linked: {
                opacity: 0.4,
            }
        },
        interactivity: {
            detect_on: "window",
            events: {
                onhover: {
                    enable: true,
                    mode: "bubble"
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
                },
                bubble: {
                    distance: 140,
                    size: 20,
                    opacity: 0.2,
                    duration: 2,
                }
            }
        }
}


class App extends Component {
    render() {
        return (
            <div class='particle-container-home particles-js'>
                <Particles
                    params={particleOpt}
                />

            </div>
        )
    }
}

export default App;
