import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './styles/Contact.css';

const Contact = () => {
  return (
    <div className="container text-light p-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="mb-4">
            <p>
              <i className="bi bi-envelope-fill text-primary"></i> inadilaa1363@gmail.com
            </p>
            <p>
              <i className="bi bi-telephone-fill text-primary"></i> 085748818992
            </p>
            <p>
              <i className="bi bi-facebook text-primary"></i> <i className="bi bi-instagram text-primary mx-2"></i> <i className="bi bi-linkedin text-primary"></i>
            </p>
          </div>
          <Button className="mb-41" href="/public/CV_Madinatul Inadila.pdf" download>
            Download My CV
          </Button>
        </div>

        <div className="col-md-6">
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>

            <Button type="mb-4">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
