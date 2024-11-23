import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './styles/Rousel.css';

import firstSlide from './images/background.png';
import secondSlide from './images/lte 4.jpg';
import thirdSlide from './images/lte 6.jpg';

function Rousel() {
  return (
    <div className="container">
      <Carousel fade>
        {/* Slide 1 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={firstSlide}
            alt="First slide"
          />
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={secondSlide}
            alt="Second slide"
          />
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={thirdSlide}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}


export default Rousel;
