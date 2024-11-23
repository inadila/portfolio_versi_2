import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import './styles/Organizational.css';

import kits1 from './images/kits_1.jpg';
import kits2 from './images/kits_5.jpg';
import kits3 from './images/kits_4.jpg';
import kits4 from './images/kits_2.jpg';
import aec1 from './images/aec_x_tk_6.jpg';
import aec2 from './images/aec_x_tk_2.jpg';
import aec3 from './images/aec_x_tk_4.jpg';
import aec4 from './images/aec_x_tk_3.jpg';

function Organizational() {
  return (
    <div className="organizational-container">
      {/* Card 1 */}
      <Card style={{ width: '100rem' }} className="m-2">
        <Card.Body>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={kits1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={kits2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={kits3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={kits4} alt="Fourth slide" />
            </Carousel.Item>
          </Carousel>
          <Card.Title>SMKN 1 Nglegok IT Community</Card.Title>
          <Card.Text>2018 - 2021</Card.Text>
        </Card.Body>
      </Card>

      {/* Card 2 */}
      <Card style={{ width: '0rem' }} className="m-2">
        <Card.Body>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={aec1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={aec2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={aec3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={aec4} alt="Fourth slide" />
            </Carousel.Item>
          </Carousel>
          <Card.Title>Aisyiyah English Club</Card.Title>
          <Card.Text>2023 - Present</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Organizational;
