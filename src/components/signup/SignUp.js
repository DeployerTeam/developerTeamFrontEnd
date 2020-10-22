import React from 'react';
import './SignUp.css';
import {API_BASE_URL_BACK} from '../../constants/index';
import axios from 'axios';
import Swal from 'sweetalert2';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      email: '',
      password:'',
      confirmPassword:'',
      phone: '',
      companyName:'',
      userName: '',

    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeNameCompany = this.onChangeNameCompany.bind(this);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);

  }

  handleSubmit(event){
    event.preventDefault();
    if(this.state.password !== this.state.confirmPassword){
       Swal.fire({
          title: 'Error de contraseñas',
          type: 'error',
          icon: 'error',
          confirmButtonColor: '#3085d6',
          text: `Las contraseñas no coinciden`,
      })
    }else{
      if(this.state.type == "user"){
        let user = { email:this.state.email, name:this.state.name, password:this.state.password, phone:this.state.phone}
        axios.post(API_BASE_URL_BACK + "/user/create", user)
        .then(async res => {
          console.log("Creando Usuario");
          await Swal.fire({
              title: 'Creación de usuario exitosa!',
              type: 'success',
              icon: 'success',
              confirmButtonColor: '#3085d6',
              text: `Usuario ${this.state.name} creado con éxito`,
          })
          this.props.history.push("/signin");
          window.location.reload();
        })
      } else if (this.state.type == "company") {
        let provider = { email:this.state.email, password:this.state.password, phone:this.state.phone, companyName:this.state.companyName}
        axios.post(API_BASE_URL_BACK + "/proveedores/create", provider)
        .then(async res => {
          console.log("Creando Proveedor")
          await Swal.fire({
              title: 'Creación de proveedor exitosa!',
              type: 'success',
              icon: 'success',
              confirmButtonColor: '#3085d6',
              text: `Proveedor ${this.state.companyName} creado con éxito`,
          });
          this.props.history.push("/signin");          
        })
      }
    }

  }

  onChangeEmail(event){
    this.setState({
      email: event.target.value
    });
  }

  onChangePassword(event){
    this.setState({
      password: event.target.value
    });
  }

  onChangeConfirmPassword(event){
    this.setState({
      confirmPassword: event.target.value
    });
  }

  onChangePhone(event){
    this.setState({
      phone: event.target.value
    })
  }

  onChangeNameCompany(event){
    this.setState({
      companyName: event.target.value
    });
  }

  onChangeUserName(event){
    this.setState({
      name: event.target.value
    });
  }

  handleChangeType(event){
    this.setState({
      type: event.target.value
    });
  }

  render(){
    return(

        <div className="limiter">
        <div className="container-signup">
          <div className="wrap-signup">
            <form className="signup-form" onSubmit={this.handleSubmit}>
              <span className="signup-form-title">
                <a href={"./"}>
                  Appet
                </a>
              </span>

              <FormControl className="radio-user" component="fieldset">
                  <FormLabel component="legend" style={{color: "#fff", "font-size":"20px"}}>Tipo</FormLabel>
                  <RadioGroup aria-label="gender" name="gender1" value={this.state.type} onChange={this.handleChangeType}>
                  <FormControlLabel value="user" control={<Radio />} label="Usuario" />
                  <FormControlLabel value="company" control={<Radio />} label="Compañia" />
                  </RadioGroup>
              </FormControl>

              <div className="wrap-input">
                <input className="input" name="email" onChange={this.onChangeEmail} required/>
                <span className="focus-input"></span>
                <span className="label-input">E-Mail</span>
              </div>

              {this.state.type ==='user' && (<div className="wrap-input">
                <input className="input" name="pass" onChange={this.onChangeUserName} required/>
                <span className="focus-input"></span>
                <span className="label-input">Nombre</span>
              </div>)}

              <div className="wrap-input">
                <input className="input" type="password" name="pass" onChange={this.onChangePassword} required/>
                <span className="focus-input"></span>
                <span className="label-input">Contraseña</span>
              </div>

              <div className="wrap-input">
                <input className="input" type="password" name="pass" onChange={this.onChangeConfirmPassword} required />
                <span className="focus-input"></span>
                <span className="label-input">Confirmación de contraseña</span>
              </div>

              <div className="wrap-input">
                <input className="input" type="number" name="pass" onChange={this.onChangePhone} required/>
                <span className="focus-input"></span>
                <span className="label-input">Numero telefonico</span>
              </div>

              {this.state.type==='company' && (<div className="wrap-input">
                <input className="input" name="pass" onChange={this.onChangeNameCompany} required/>
                <span className="focus-input"></span>
                <span className="label-input">Compañia o fundación</span>
              </div>)}

              <div className="container-signup-form-btn">
              <a className="vincule" href="#">Información</a>
                <button className="signup-form-btn" type="submit">
                  Crear
                </button>
              </div>
          </form>

          <div className="signup-image">
          </div>
        </div>
      </div>
      </div>
    )
  }
}
export default SignUp;
