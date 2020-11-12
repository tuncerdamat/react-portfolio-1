import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: "Damat Portfolio",
      headerLinks: [
        { title: "home", path: "/" },
        { title: "about", path: "/about" },
        { title: "contact", path: "/contact" }
      ],
      home: {
        title: "Show must start",
        subtitle: "Projects that show off",
        text: "Checkout our projects below"
      },
      about: {
        title: "About Us"
      },
      contact: {
        title: "Contact Us"
      }
    }
  }
  render(){
    return (
        <Router>
          <Container className="p-0" fluid={true}>
            <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand>Damat Brothers</Navbar.Brand>

              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            
            <Footer />
            
          </Container>
        </Router>
    );  
  }
}

export default App;
