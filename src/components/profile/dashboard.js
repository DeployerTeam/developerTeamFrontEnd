import React, { Component } from "react";
import './modal.css';
import Profile from './Profile.js';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav';

import { NavLink } from "react-router-dom";


export default class Dashboard extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <ModalFormulary show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </ModalFormulary>
        <Nav.Link onClick={this.showModal}>Perfil</Nav.Link>
      </main>
    );
  }
}

const ModalFormulary = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
      <div className={showHideClassName}>
        <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Perfil</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Profile/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Guardar cambios
                </Button>
            </Modal.Footer>
        </Modal>
      </div>
    );
};

const container = document.createElement("div");
document.body.appendChild(container);
