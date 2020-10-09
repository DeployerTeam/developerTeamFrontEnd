import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dashboard from '../profile/dashboard';
import AllyDashboard from '../profile/AllyDashboard';
import Swal from 'sweetalert2';




export default function PrimarySearchAppBar(props) {
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
            <Nav.Link eventKey={2}  onClick={logout}>
              Logout
            </Nav.Link>)}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

async function logout(){
  await Swal.fire({
    title: 'Cierre de sesión exitoso!',
    type: 'success',
    icon: 'success',
    text: `Sesión cerrada con exito ${localStorage.getItem("localEmail")}`,
  })
  localStorage.clear();
  window.location.reload();

}
