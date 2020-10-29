import React from 'react';

import Header from '../headerComponent/header';
import Map from './AllianceMap';
import './AllianceClientPage.css';
import Carousel from 'react-bootstrap/Carousel'

export default class AllianceClientPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      ally: this.props.location.state.alliances
    }    
  }

    render() {
        return(
            <React.Fragment>
                <div className="general">
                    <div className="row">
                      <Header />
                    </div>
                    <div className="back">
                      <a href="/alliances" className="btn btn-primary">Atrás</a>
                    </div>
                    <div className="allianceName">
                      <h1><dt>{this.state.ally.name}</dt></h1>
                    </div>
                    <div className="row body cont">
                        
                        <div className="map col-12 col-md-6">
                          <Map/>
                        </div>

                        <div className="carousel col-12 col-md-6">
                          <Carousel>
                            <Carousel.Item>
                            <img className="img-thumbnail" id="imgPerfil" src="https://www.flsouthern.edu/getattachment/1af69455-422d-4da9-a15c-59d18764f746/pre-veterinary.aspx"></img>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img className="img-thumbnail" id="imgPerfil" src="https://www.flsouthern.edu/getattachment/1af69455-422d-4da9-a15c-59d18764f746/pre-veterinary.aspx"></img>
                            </Carousel.Item>
                            <Carousel.Item>
                            <img className="img-thumbnail" id="imgPerfil" src="https://www.flsouthern.edu/getattachment/1af69455-422d-4da9-a15c-59d18764f746/pre-veterinary.aspx"></img>
                            </Carousel.Item>
                          </Carousel>
                        </div>
                        
                    </div>
                    <div className="info" style={{color: "#fff"}}>
                            <h4 className="font-weight-light font">Dirección: {this.state.ally.address}, {this.state.ally.city}</h4>
                            <h4 className="font-weight-light">Servicio: Market</h4>
                            <h4 className="font-weight-light">Teléfono: {this.state.ally.phone}</h4>
                            <h4 className="font-weight-light">Correo: {this.state.ally.email}</h4>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}