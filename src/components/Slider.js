import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Slider.css';

const slideImages = [
  './images/Slider-investor-1.jpg',
  'images/Slider-investor-2.jpg',
  'images/Slider-investor-3.jpg'
];

const properties = {
  duration: 5000000000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(https://i.ibb.co/ThXVhnT/Slider-investor-1.jpg)`}}>
              <span><h2>Research community</h2><div className="hide-mobile">By a close connection to the research core at the Norwegian University of Science and Technology, Ntention strive to establish a leading research community. The group of researchers work to maintain a deep understanding of interaction systems and gesture recognition.</div></span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(https://i.ibb.co/9n5Z01B/Slider-investor-2.jpg)`}}>
              <span><h2>Agile team</h2><div className="hide-mobile">When you combine a burning desire to change the world for the better with a young ambitious team, you'll get an agile group of people ready to do whatever it takes to move boundaries. By short time, Ntention has managed to attract recognized partnerships with big players including NASA partners and the leading Nordic company on model-based implementation within the construction industry.</div></span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(https://i.ibb.co/5Y4FCZg/Slider-investor-3.jpg)`}}>
              <span><h2>Pioneers</h2><div className="hide-mobile">It requires top league innovators to lead a generation through a paradigm shift. Ntention work with state-of-the-art technology and has an unique position in the global market. By commitment to become a global leader, the technology will evolve and expand into new markets. The team members has a long history of entrepreneurial activities and innovation awards.</div></span>
            </div>
          </div>
        </Slide>
      </div>
    )
}


export default Slideshow;
