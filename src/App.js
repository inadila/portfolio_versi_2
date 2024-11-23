import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./styles/App.css";
import logo from "./images/logo_kanan_atas-removebg-preview.png";

import About from './about';
import Organizational from './organizational'; 
import Creation from "./creation";
import Work from "./work";
import Contact from "./contact";
import Rousel from "./rousel";
import Skill from "./skill";

const App = () => {
  return (
    <div className="app-container">
      <Navbar className="navbar-custom">
        <Container>
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <img
              src={logo} 
              alt="Logo"
              className="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#portfolio">Portofolio</Nav.Link>
              <Nav.Link href="#contact">Contacts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

{/* ============================= */}

      <Rousel /> 

      <h1 className="about">About Me</h1>
      <About />

      <h1 className="skill">Skill</h1>
      <Skill />

      <h1 className="creation">Creation of Work</h1>
      <Creation /> 

      <h1 className="organ">Organizational Experience</h1>
      <Organizational /> 

      <h1 className="work">Work Experience</h1>
      <Work /> 

      <h1 className="contact">Contacts</h1>
      <Contact /> 

      
    </div>
  );
};

export default App;
