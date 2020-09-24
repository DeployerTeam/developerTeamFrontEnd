import React from 'react';
import './SignUp.css';
import {API_BASE_URL_BACK} from '../../constants/index';
import axios from 'axios';

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
      nameCompany:'',
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

    if(this.state.type == "user"){
      let user = { email:this.state.email, name:this.state.name, password:this.state.password, phone:this.state.phone}
      axios.post(API_BASE_URL_BACK + "/user/create", user)
      .then(res => { console.log("Creando Usuario")})
    } else if (this.state.type == "company") {
      let provider = { email:this.state.email, password:this.state.password, phone:this.state.phone, nameCompany:this.state.nameCompany}
      axios.post(API_BASE_URL_BACK + "/proveedores/create", provider)
      .then(res => { console.log("Creando Proveedor")})
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
      nameCompany: event.target.value
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
            <form className="signup-form">
              <span className="signup-form-title">
                Appet
              </span>

              <FormControl className="radio-user" component="fieldset">
                  <FormLabel component="legend" style={{color: "#fff", "font-size":"20px"}}>Type</FormLabel>
                  <RadioGroup aria-label="gender" name="gender1" value={this.state.type} onChange={this.handleChangeType}>
                  <FormControlLabel value="user" control={<Radio />} label="User" />
                  <FormControlLabel value="company" control={<Radio />} label="Company" />
                  </RadioGroup>
              </FormControl>

              <div className="wrap-input">
                <input className="input" name="email" onChange={this.onChangeEmail}/>
                <span className="focus-input"></span>
                <span className="label-input">Mail</span>
              </div>

              <div className="wrap-input">
                <input className="input" name="pass" onChange={this.onChangeUserName}/>
                <span className="focus-input"></span>
                <span className="label-input">Name</span>
              </div>

              <div className="wrap-input">
                <input className="input" type="password" name="pass" onChange={this.onChangePassword}/>
                <span className="focus-input"></span>
                <span className="label-input">Password</span>
              </div>

              <div className="wrap-input">
                <input className="input" type="password" name="pass" onChange={this.onChangeConfirmPassword}/>
                <span className="focus-input"></span>
                <span className="label-input">Confirm Password</span>
              </div>

              <div className="wrap-input">
                <input className="input" type="number" name="pass" onChange={this.onChangePhone}/>
                <span className="focus-input"></span>
                <span className="label-input">Phone</span>
              </div>

              <div className="wrap-input">
                <input className="input" name="pass" onChange={this.onChangeNameCompany}/>
                <span className="focus-input"></span>
                <span className="label-input">Company or foundation</span>
              </div>

              <div className="container-signup-form-btn">
              <a className="vincule" href="#">Info</a>
                <button className="signup-form-btn" type="submit" onClick={this.handleSubmit}>
                  SignUp
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
