import React, { Component } from "react";
import './modal.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Formulary from './formulary.js'

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
        <Button variant="primary" onClick={this.showModal}>
          Adopt
        </Button>
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
                <Modal.Title>Adoption Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formulary/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
      </div>
    );
};

const container = document.createElement("div");
document.body.appendChild(container);
