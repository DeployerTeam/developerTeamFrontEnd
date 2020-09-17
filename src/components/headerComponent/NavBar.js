import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import UserDashboard from '../profile/UserDashboard';
import AllyDashboard from '../profile/AllyDashboard';



export default function PrimarySearchAppBar() {
  return(
    <div className="container-fluid prueba">
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark"className="fixed-top">
        <Navbar.Brand href="#home">Appet</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">

            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <UserDashboard/>
              <AllyDashboard/>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/">
              Home
            </Nav.Link>
            <Nav.Link href="/signin">
              Login
            </Nav.Link>
            <Nav.Link eventKey={2} href="/signup">
              Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
