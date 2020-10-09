import React, { Component } from "react";
import './modal.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Formulary from './formulary.js'

export default class Dashboard extends Component {

  constructor(props){
    super(props);
    let user;
    let isSupplier;
  }

  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };




  render() {
    if(localStorage.getItem("isSupplier") === "false"){
      this.isUser = true;
    }else if(localStorage.getItem("isSupplier") === "true"){
      this.isSupplier = true;
    }
    return (
      <main>
        <ModalFormulary show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </ModalFormulary>

        {this.isUser && (<Button variant="primary" onClick={this.showModal}>
          Preferencias
        </Button>)}

        {!this.isUser && !this.isSupplier && (<Button variant="primary" href="/signin">
          Preferencias
        </Button>)}

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
                <Modal.Title>Formulario de Preferencias</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Formulary />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
      </div>
    );
};

const container = document.createElement("div");
document.body.appendChild(container);
