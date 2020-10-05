import React from 'react';

import Header from '../headerComponent/header';
import './dogProfile.css';
import Dashboard from '../formularioAdopcion/dashboard';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default class DogProfile extends React.Component {

  constructor(props){
    super(props);
    let isUser;
    this.state = {
      pet: this.props.location.state.pets
    }
    console.log(this.state.pet)
  }

    render() {
      if(localStorage.getItem("isSupplier") === "false"){
        this.isUser = true;
      }

        return(
            <React.Fragment>
                <div className="general">
                    <div className="row">
                        <Header />
                    </div>
                    <div className="back">
                      <a href="/adoption" className="btn btn-primary">Back</a>
                    </div>
                    <div className="row body cont">
                        <div className="col-12 col-md-6">
                            <img className="img-thumbnail" id="imgPerfil" src={this.state.pet.image}></img>
                        </div>
                        <div className="col-12 col-md-6" style={{color: "#fff"}}>
                            <h1><dt>{this.state.pet.name+ " " + "Description"}</dt></h1>
                            <br/>
                            <h4 className="font-weight-light font">Gender : {this.state.pet.gender}</h4>
                            <h4 className="font-weight-light">Breed: {this.state.pet.raza}</h4>
                            <h4 className="font-weight-light">Age: {this.state.pet.edad}</h4>
                            {/**<h4 className="font-weight-light">Ubicación: Bogotá</h4>**/}
                        </div>
                    </div>
                    <div className="botonStyle2">
                        {this.isUser && (<a href="/donation" id="color" className="btn btn float-left mr-2">Donate to foundation</a>)}
                    {this.isUser && (<Dashboard/>)}
                    </div>
                </div>

            </React.Fragment>
        );
    }
}
