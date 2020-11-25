
import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import { API_BASE_URL_BACK } from "../../constants/index";
import axios from 'axios';
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import './profile.css';

export default class Profile extends Component {

  constructor(props){
    super(props);
    this.state = {
      email : "",
      password : "",
      age : null,
      gender : "",
      phone : null,
      name : "",
      city : "",
      address : ""
    }
    this.obtenerUsuario = this.obtenerUsuario.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.actualizarUsuario = this.actualizarUsuario.bind(this);
    this.reload = this.reload.bind(this);
  }

  componentDidMount(){
    this.obtenerUsuario();
  }

  onChangeName(event) {
    this.setState({
      name : event.target.value
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

  onChangeAge(event) {
    this.setState({
      age : event.target.value
    });
  }

  onChangeGender(event) {
    this.setState({
      gender : event.target.value
    });
  }

  obtenerUsuario() {
    let getUser = axios.get(API_BASE_URL_BACK + '/user/' + localStorage.getItem("localEmail"))
    .then( getUser => {
      this.setState({email : getUser.data.email, 
        password : getUser.data.password,
        age : getUser.data.age, 
        gender : getUser.data.gender, 
        phone : getUser.data.phone, 
        name : getUser.data.name, 
        city : getUser.data.city,
        address : getUser.data.address})
    })
  }

  actualizarUsuario(event) {
    event.preventDefault();
    let user = {
      email : this.state.email,
      password : this.state.password,
      phone : this.state.phone,
      name : this.state.name,
      city : this.state.city,
      address : this.state.address,
      age : this.state.age,
      gender : this.state.gender
    }
    axios.put(API_BASE_URL_BACK + '/user/' + localStorage.getItem("localEmail"), user)
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
                  <label for="fname">Nombre</label>
                </div>
                <div className="col-75">
                  <input type="text" id="fname" name="firstname" value={this.state.name} onChange={this.onChangeName}/>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label for="age">Edad</label>
                </div>
                <div className="col-75">
                  <input type="text" id="age" name="age" value={this.state.age} onChange={this.onChangeAge}/>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label for="gender">Género</label>
                </div>
                <div className="col-75">
                  <select id="gender" name="gender" value={this.state.gender} onChange={this.onChangeGender}>
                    <option>Seleccione</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>                        
              <div className="row">
                <div className="col-25">
                  <label for="pNumber">Número telefónico</label>
                </div>
                <div className="col-75">
                  <input type="text" id="pNumber" name="pNumber" value={this.state.phone} onChange={this.onChangePhone}/>
                </div>
              </div>                        
              <div className="row">
                <div className="col-25">
                  <label for="email">E-mail</label>
                </div>
                <div className="col-75">
                  <input type="text" id="email" name="email" value={this.state.email} onChange={this.onChangeEmail}/>
                </div>
              </div>                        
              <div className="row">
                <div className="col-25">
                  <label for="city">Ciudad</label>
                </div>
                <div className="col-75">
                  <input type="text" id="city" name="city" value={this.state.city} onChange={this.onChangeCity}/>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label for="address">Dirección</label>
                </div>
                <div className="col-75">
                  <input type="text" id="address" name="address" value={this.state.address} onChange={this.onChangeAddress}/>
                </div>
              </div> 

              <div class="float-right style-div-buttons">
                <Button variant="secondary" onClick={this.reload}>
                    Cerrar
                </Button>
                <Button variant="primary" type="submit" onClick={this.actualizarUsuario}>
                    Guardar cambios
                </Button>  
              </div>

            </form>
          </div>
        </div>
      );
  }
}