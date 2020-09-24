import React from 'react';
import './Login.css';
import {API_BASE_URL_BACK} from '../../constants/index';
import axios from 'axios';


const required = value => {
  if(!value){
    return(
      <div classNameName="alert alert-danger" role="alert">
        Este campo es necesario
      </div>
    )
  }
}



class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    var sesion= [
      this.state.username,
      this.state.password
    ]
    axios.post(API_BASE_URL_BACK + "/auth/signin", sesion).then(response => console.log(response.data));
  }

  onChangeUsername(event){
    this.setState({
      username: event.target.value
    });
  }

  onChangePassword(event){
    this.setState({
      password: event.target.value
    });
  }

  render(){
    return(
      <div className="limiter">
  		<div className="container-login">
  			<div className="wrap-login">
  				<form className="login-form" onSubmit={this.handleSubmit}>
  					<span className="login-form-title">
  						Appet
  					</span>


  					<div className="wrap-input">
  						<input className="input" onChange={this.onChangeUsername} name="username"/>
  						<span className="focus-input"></span>
  						<span className="label-input">Username</span>
  					</div>


  					<div className="wrap-input">
  						<input className="input" type="password" onChange={this.onChangePassword} name="pass"/>
  						<span className="focus-input"></span>
  						<span className="label-input">Password</span>
  					</div>

  					<div className="container-login-form-btn">
            <a className="vincule" href="#">You don't have account? Create one</a>
  						<button className="login-form-btn" type="submit">
  							SignIn
  						</button>
  					</div>
				</form>

				<div className="login-image">
				</div>
			</div>
		</div>
	</div>
    )
  }
}
export default Login;
