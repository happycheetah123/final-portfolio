import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from "react";

class Navigation extends React.Component {
    render() {
        return(
            <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">happycheetah123</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">About</Nav.Link>
                  <Nav.Link href="#link">Projects</Nav.Link>
                  <Nav.Link href="#link">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
    }
}

export default Navigation;