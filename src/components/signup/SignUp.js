import React from 'react';
import './SignUp.css';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      email: '',
      password:'',
      confirmPassword:'',
      phone: '',
      nameCompany:''
    }
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeNameCompany = this.onChangeNameCompany.bind(this);
  }

  handleSubmit(event){

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

  render(){
    return(
        <div className="limiter">
        <div className="container-signup">
          <div className="wrap-signup">
            <form className="signup-form">
              <span className="signup-form-title">
                PetStore
              </span>

              <div className="wrap-input">
                <input className="input" type="text" name="email" onChange={this.onChangeEmail}/>
                <span className="focus-input"></span>
                <span className="label-input">Mail</span>
              </div>

              <div className="wrap-input">
                <input className="input" type="password" name="pass" onChange={this.onChangePassword}/>
                <span className="focus-input"></span>
                <span className="label-input">Password</span>
              </div>

              <div className="wrap-input">
                <input className="input" type="text" name="pass"/>
                <span className="focus-input"></span>
                <span className="label-input">Confirm Password</span>
              </div>

              <div className="wrap-input">
                <input className="input" type="number" name="pass"/>
                <span className="focus-input"></span>
                <span className="label-input">Phone</span>
              </div>

              <div className="wrap-input">
                <input className="input" type="text" name="pass"/>
                <span className="focus-input"></span>
                <span className="label-input">Company or foundation</span>
              </div>

              <div className="container-signup-form-btn">
              <a className="vincule" href="#">Info</a>
                <button className="signup-form-btn">
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
