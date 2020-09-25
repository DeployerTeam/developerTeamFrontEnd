import React, { Component } from "react";
import './modal.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import AllyProfile from "./AllyProfile";
import Nav from 'react-bootstrap/Nav';

export default class AllyDashboard extends Component {
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
        <Nav.Link onClick={this.showModal}>Ally Profile</Nav.Link>
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
                <Modal.Title>Alliance Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AllyProfile/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
      </div>
    );
};

const container = document.createElement("div");
document.body.appendChild(container);
