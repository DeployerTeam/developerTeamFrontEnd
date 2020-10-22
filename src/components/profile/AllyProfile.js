
import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import { API_BASE_URL_BACK } from "../../constants/index";
import axios from 'axios';

export default class AllyProfile extends Component {

  constructor(props){
    super(props);
    this.state = {
      ally : {},
      email : "",
      password : "",
      phone : null,
      companyName : "",
      city : "",
      address : ""
    }
    this.obtenerProveedor = this.obtenerProveedor.bind(this);
  }

  componentDidMount(){
    this.obtenerProveedor();
  }

  obtenerProveedor() {
    let getAlly = axios.get(API_BASE_URL_BACK + '/proveedores/' + localStorage.getItem("localEmail"))
    .then( getAlly => {
      this.setState({email : getAlly.data.email, 
        password : getAlly.data.password, 
        phone : getAlly.data.phone, 
        companyName : getAlly.data.name, 
        city : getAlly.data.city,
        address : getAlly.data.address})
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
                  <label for="fname">Nombre de la empresa</label>
                </div>
                <div className="col-75">
                  <input type="text" id="cname" name="companyname" value={this.state.companyName} />
                </div>
              </div>                 
              <div className="row">
                <div className="col-25">
                  <label for="pNumber">Numero telefónico</label>
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
                  <input type="text" id="email" name="email" value={this.state.email} />
                </div>
              </div>                        
              <div className="row">
                <div className="col-25">
                  <label for="city">Ciudad</label>
                </div>
                <div className="col-75">
                  <input type="text" id="city" name="city" value={this.state.city} />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label for="address">Dirección</label>
                </div>
                <div className="col-75">
                  <input type="text" id="address" name="address" value={this.state.address} />
                </div>
              </div>                    
            </form>
          </div>
        </div>
      );
  }
}