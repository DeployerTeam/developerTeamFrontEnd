import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dashboard from '../profile/dashboard';
import AllyDashboard from '../profile/AllyDashboard';



export default function PrimarySearchAppBar() {
  return(
    <div className="container-fluid prueba">
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark"className="fixed-top">
        <Navbar.Brand href="/">Appet</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Dashboard/>
            <AllyDashboard/>
            <Nav.Link href="/donorprofile">
              Inbox
            </Nav.Link>

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
