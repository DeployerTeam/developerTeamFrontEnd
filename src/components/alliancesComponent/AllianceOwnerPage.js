import React from 'react';

import Header from '../headerComponent/header';
import Map from './AllianceMap';
import './AllianceOwnerPage.css';
import Button from 'react-bootstrap/Button'

export default class AllianceOwnerPage extends React.Component {

  constructor(props){
    super(props);
  }

    render() {
        return(
            <React.Fragment>
                <div className="general">
                    <div className="row">
                      <Header />
                    </div>
                    <div className="back">
                      <a href="/alliances" className="btn btn-primary">Atras</a>
                    </div>
                    <div className="allianceName">
                      <h1><dt>VetStore</dt></h1>
                    </div>
                    <div className="row body cont">
                        
                        <div className="map col-12 col-md-6">
                          <Map/>
                        </div>
                        <div className="col-12 col-md-6">
                          <img className="img-thumbnail" id="imgPerfil" src="https://www.flsouthern.edu/getattachment/1af69455-422d-4da9-a15c-59d18764f746/pre-veterinary.aspx"></img>
                        </div>
                        
                    </div>
                    <div className="info" style={{color: "#fff"}}>
                            <h4 className="font-weight-light font">Dirección: Cll 170</h4>
                            <h4 className="font-weight-light">Servicio: Market</h4>
                            <h4 className="font-weight-light">Telefono: +57 111 1111111</h4>
                            <h4 className="font-weight-light">E-mail: vetstore@vetsrore.com</h4>
                            <br/>
                            <Button variant="primary" >
                              Editar información
                            </Button>
                    </div>

                </div>

            </React.Fragment>
        );
    }
}