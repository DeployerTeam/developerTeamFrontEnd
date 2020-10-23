
import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import { API_BASE_URL_BACK } from "../../constants/index";
import axios from 'axios';

export default class Profile extends Component {

  constructor(props){
    super(props);
    this.state = {
      email : "",
      age : null,
      gender : "",
      phone : null,
      name : "",
      city : "",
      address : ""
    }
    this.obtenerUsuario = this.obtenerUsuario.bind(this);
  }

  componentDidMount(){
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    let getUser = axios.get(API_BASE_URL_BACK + '/user/' + localStorage.getItem("localEmail"))
    .then( getUser => {
      this.setState({email : getUser.data.email, 
        age : getUser.data.age, 
        gender : getUser.data.gender, 
        phone : getUser.data.phone, 
        name : getUser.data.name, 
        city : getUser.data.city,
        address : getUser.data.address})
      console.log(this.state.name);
    })
  }

  render(){
      return(
        <div className="container">
          <div className="profilePhoto" align="center">
            <img src= "https://brisbanevs.com/storage/app/media/ramona/vet-ple-ramona-feature-image-2.jpg" width="70%" />
            <br/>
            <br/>
            <br/>
            <div className="file">
              <Form.File 
              id="custom-file"
              label="Custom file input"
              custom/>
            </div>
            
          </div>
          <br/>
          <br/>
          <div className="profileInfo">
            <form >
              <div className="row">
                <div className="col-25">
                  <label for="fname">Nombre</label>
                </div>
                <div className="col-75">
                  <input type="text" id="fname" name="firstname" value={this.state.name}/>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label for="age">Edad</label>
                </div>
                <div className="col-75">
                  <input type="text" id="age" name="age" value={this.state.age}/>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label for="gender">Genero</label>
                </div>
                <div className="col-75">
                  <select id="gender" name="gender">
                    <option value={this.state.gender} selected disabled hidden>Seleccione</option>
                    <option value="australia">Masculino</option>
                    <option value="canada">Femenino</option>
                    <option value="usa">Otro</option>
                  </select>
                </div>
              </div>                        
              <div className="row">
                <div className="col-25">
                  <label for="pNumber">Número telefónico</label>
                </div>
                <div className="col-75">
                  <input type="text" id="pNumber" name="pNumber" value={this.state.phone}/>
                </div>
              </div>                        
              <div className="row">
                <div className="col-25">
                  <label for="email">E-mail</label>
                </div>
                <div className="col-75">
                  <input type="text" id="email" name="email" value={this.state.email}/>
                </div>
              </div>                        
              <div className="row">
                <div className="col-25">
                  <label for="city">Ciudad</label>
                </div>
                <div className="col-75">
                  <input type="text" id="city" name="city" value={this.state.city}/>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label for="address">Dirección</label>
                </div>
                <div className="col-75">
                  <input type="text" id="address" name="address" value={this.state.address}/>
                </div>
              </div>                    
            </form>
          </div>
        </div>
      );
  }
}