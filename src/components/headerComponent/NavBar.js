import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dashboard from '../profile/dashboard';
import AllyDashboard from '../profile/AllyDashboard';
import Swal from 'sweetalert2';
import Dropdown from 'react-bootstrap/Dropdown'
import DashboardProperties from '../formularioPreferencias/dashboard';


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
            {localStorage.getItem("token") && (
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-inbox" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm9.954 5H10.45a2.5 2.5 0 0 1-4.9 0H1.066l.32 2.562a.5.5 0 0 0 .497.438h12.234a.5.5 0 0 0 .496-.438L14.933 9zM3.809 3.563A1.5 1.5 0 0 1 4.981 3h6.038a1.5 1.5 0 0 1 1.172.563l3.7 4.625a.5.5 0 0 1 .105.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z"/>
              </svg>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/donorprofile">Inbox</Dropdown.Item>
                {isUser && (<Dropdown.Item href="#">Notificaciones</Dropdown.Item>)}
                <DashboardProperties/>
              </Dropdown.Menu>
            </Dropdown>
            )}

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
