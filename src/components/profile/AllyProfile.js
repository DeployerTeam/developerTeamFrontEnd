
import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import { API_BASE_URL_BACK } from "../../constants/index";
import axios from 'axios';
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import './allyProfile.css';

export default class AllyProfile extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      email : "",
      password : "",
      phone : null,
      companyName : "",
      city : "",
      address : ""
    }
    this.obtenerProveedor = this.obtenerProveedor.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.actualizarProveedor = this.actualizarProveedor.bind(this);
    this.reload = this.reload.bind(this);

  }

  componentDidMount(){
    this.obtenerProveedor();
  }

  onChangeName(event) {
    this.setState({
      companyName : event.target.value
    });
  }

  onChangePhone(event) {
    this.setState({
      phone : event.target.value
    });
  }

  onChangeEmail(event) {
    this.setState({
      email : event.target.value
    });
  }

  onChangeCity(event) {
    this.setState({
      city : event.target.value
    });
  }

  onChangeAddress(event) {
    this.setState({
      address : event.target.value
    });
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

  actualizarProveedor(event) {
    event.preventDefault();
    let ally = {
      email : this.state.email,
      password : this.state.password,
      phone : this.state.phone,
      companyName : this.state.companyName,
      city : this.state.city,
      address : this.state.address
    }
    axios.put(API_BASE_URL_BACK + '/proveedores/' + localStorage.getItem("localEmail"), ally)
      .then(async () => {
        await Swal.fire({
            title: '¡Perfil actualizado!',
            type: 'success',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            text: '¡Perfil actualizado con éxito!'
        })
        await this.reload();

      },error =>{
          Swal.fire({
              title: '¡Error al actualizar perfil!',
              type: 'error',
              icon: 'error',
              confirmButtonColor: '#3085d6',
              text: '¡El perfil no fue actualizado con éxito!',
          })
        })
       
  }

  reload = () => {
    window.location.href = window.location.href;
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
                  <input type="text" id="cname" name="companyname" value={this.state.companyName} onChange={this.onChangeName} />
                </div>
              </div>                 
              <div className="row">
                <div className="col-25">
                  <label for="pNumber">Numero telefónico</label>
                </div>
                <div className="col-75">
                  <input type="text" id="pNumber" name="phone" value={this.state.phone} onChange={this.onChangePhone} />
                </div>
              </div>                        
              <div className="row">
                <div className="col-25">
                  <label for="email">E-mail</label>
                </div>
                <div className="col-75">
                  <input type="text" id="email" name="email" value={this.state.email} onChange={this.onChangeEmail} />
                </div>
              </div>                        
              <div className="row">
                <div className="col-25">
                  <label for="city">Ciudad</label>
                </div>
                <div className="col-75">
                  <input type="text" id="city" name="city" value={this.state.city} onChange={this.onChangeCity}  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label for="address">Dirección</label>
                </div>
                <div className="col-75">
                  <input type="text" id="address" name="address" value={this.state.address} onChange={this.onChangeAddress} />
                </div>
              </div>    
              <div class="float-right style-div-buttons">
                <Button variant="secondary" onClick={this.reload}>
                    Cerrar
                </Button>
                <Button variant="primary" type="submit" onClick={this.actualizarProveedor}>
                    Guardar cambios
                </Button>  
              </div>
                            
            </form>
          </div>
        </div>
      );
  }
}