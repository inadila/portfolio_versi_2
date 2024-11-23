import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import './styles/Work.css';

import image1 from './images/magang 1.jpg';
import image2 from './images/magang 2.jpg';
import image5 from './images/lte 4.jpg';
import image6 from './images/lte 6.jpg';
import image7 from './images/lte 9.jpg';
import image8 from './images/lte 8.jpg';

function Work() {
  return (
    <div className="work-container">
      {/* Card 1 */}
      <Card className="card1">
        <Carousel interval={1000}>
          <Carousel.Item>
            <img className="d-block w-100" src={image1} alt="Slide 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image2} alt="Slide 2" />
          </Carousel.Item>
        </Carousel>
        <Card.Body>
          <Card.Title className="cards">CV. Argia Teknologi Nusantara</Card.Title>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Internship</li>
            <li className="list-group-item">6 months</li>
          </ul>
        </Card.Body>
      </Card>

      {/* Card 2 */}
      <Card className="card2">
        <Carousel interval={800}>
          <Carousel.Item>
            <img className="d-block w-100" src={image5} alt="Slide 5" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image6} alt="Slide 6" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image7} alt="Slide 7" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={image8} alt="Slide 8" />
          </Carousel.Item>
        </Carousel>
        <Card.Body>
          <Card.Title className="cards">PT Lintas Teknologi Evolusi</Card.Title>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Work</li>
            <li className="list-group-item">2.7 years</li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Work;
