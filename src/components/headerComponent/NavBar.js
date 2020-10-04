import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dashboard from '../profile/dashboard';
import AllyDashboard from '../profile/AllyDashboard';





export default function PrimarySearchAppBar() {
  let isSupplier;
  let isUser;
  if(localStorage.getItem("isSupplier") !== null){

    if(localStorage.getItem("isSupplier") === "true"){
      isSupplier = true;
    }if(localStorage.getItem("isSupplier") === "false"){
      isUser = true;
    }
  }

  return(
    <div className="container-fluid prueba">
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark"className="fixed-top">
        <Navbar.Brand href="/">Appet</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {isUser && (<Dashboard/>)}
            {isSupplier && (<AllyDashboard/>)}
            {localStorage.getItem("token") && (<Nav.Link href="/donorprofile">
              Inbox
            </Nav.Link>)}

          </Nav>
          <Nav>
            {!localStorage.getItem("token") && (
            <Nav.Link href="/signin">
              Login
            </Nav.Link>)}
            {!localStorage.getItem("token") && (
            <Nav.Link eventKey={2} href="/signup">
              Signup
            </Nav.Link>)}
            {localStorage.getItem("token") && (
            <Nav.Link eventKey={2} href="/signin" onClick={() => localStorage.clear()}>
              Logout
            </Nav.Link>)}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
