import React from 'react';

import Swal from 'sweetalert2';
import Header from '../headerComponent/header';
import Map from './AllianceMap';
import './AllianceClientPage.css';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import {API_BASE_URL_BACK} from '../../constants/index';

export default class AllianceClientPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      ally: this.props.location.state.alliances,
      code: ''
    }    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    let bono = [localStorage.getItem("localEmail"),
                this.state.code];
    console.log(bono);
    axios.post(API_BASE_URL_BACK + "/bono/redeem", bono)
    .then(async res => {
      console.log(res.data);
      if(res.data == true){
          await Swal.fire({
            title: 'Solicitud exitosa!',
            type: 'success',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            text: `Bono Redimido`,
        })
      } else {
        Swal.fire({
          title: 'Bono no valido!',
          type: 'error',
          icon: 'error',
          confirmButtonColor: '#3085d6',
          text: `El bono ya ha sido canjeado o no existe`,
        })
      }


    });

  }

  onChangeCode(event){
    this.setState({
      code: event.target.value
    });
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

                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div >
                                <label for="fname">Redimir Bono</label>
                            </div>
                            <div className="col-25">
                                <input onChange={this.onChangeCode} type="text" name="firstname" placeholder="Codigo" required/>
                            </div>
                            <Button type="submit" variant="primary">
                                Canjear
                            </Button>
                        </div>


                    </form>

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