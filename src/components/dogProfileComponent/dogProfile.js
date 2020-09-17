import React from 'react';

import Header from '../headerComponent/header';
import './dogProfile.css';
import Dashboard from '../formularioAdopcion/dashboard';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default class DogProfile extends React.Component {

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
                        <Breadcrumb >
                            <Breadcrumb.Item href="/adoption" className= "bc">
                                pets
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>pet</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div className="row body cont">
                        <div className="col-12 col-md-6">
                            <img className="img-thumbnail" id="imgPerfil" src="https://sumedico.blob.core.windows.net.optimalcdn.com/images/2020/05/13/cuidadosperrosschnauzer-focus-min0.03-0.46-983-557.jpg"></img>
                        </div>
                        <div className="col-12 col-md-6" style={{color: "#fff"}}>
                            <h1><dt>Bolt's description</dt></h1>
                            <br/>
                            <h4 className="font-weight-light font">Sexo: Macho</h4>
                            <h4 className="font-weight-light">Raza: Schnauzer</h4>
                            <h4 className="font-weight-light">Edad: 2 años</h4>
                            <h4 className="font-weight-light">Ubicación: Bogotá</h4>
                        </div>
                    </div>
                    <div className="botonStyle2">
                        <a href="/donation" id="color" className="btn btn float-left mr-2">Donate to foundation</a>
                        <Dashboard/>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}
