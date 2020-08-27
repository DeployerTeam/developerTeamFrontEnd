import React from 'react';

import Header from '../headerComponent/header';
import './dogProfile.css';
import Dogs from '../dogsComponent/dogs';

export default class DogProfile extends React.Component {

    render() {
        return(
            <React.Fragment>
                <div style={{height: + window.screen.height}} className="container">
                    <div className="row">
                        <Header />
                    </div>
                    <br/>
                    <div className="row body">
                        <div className="col-12 col-md-6">
                            <img className="img-thumbnail" id="imgPerfil" src="https://sumedico.blob.core.windows.net.optimalcdn.com/images/2020/05/13/cuidadosperrosschnauzer-focus-min0.03-0.46-983-557.jpg"></img>
                        </div>
                        <div className="col-12 col-md-6">
                            <h1><dt>Bolt's description</dt></h1>
                            <br/>
                            <h4 className="font-weight-light">Sexo: Macho</h4>
                            <h4 className="font-weight-light">Raza: Schnauzer</h4>
                            <h4 className="font-weight-light">Edad: 2 años</h4>
                            <h4 className="font-weight-light">Ubicación: Bogotá</h4>
                        </div>                     
                    </div>
                    <div className="botonStyle2">
                        <a href="/adoption" id="color" className="btn btn">Adopt</a>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}