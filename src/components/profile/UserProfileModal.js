
import React, { Component } from "react";
import Form from 'react-bootstrap/Form'



export default class UserProfileModal extends Component {

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
                  <label for="fname">Name</label>
                </div>
                <div className="col-75">
                  <input type="text" id="fname" name="firstname" placeholder="Complete Name.."/>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label for="age">Age</label>
                </div>
                <div className="col-75">
                  <input type="text" id="age" name="age" placeholder="Age.."/>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label for="gender">Gender</label>
                </div>
                <div className="col-75">
                  <select id="gender" name="gender">
                    <option value="" selected disabled hidden>Choose here</option>
                    <option value="australia">Male</option>
                    <option value="canada">Female</option>
                    <option value="usa">Other</option>
                  </select>
                </div>
              </div>                        
              <div className="row">
                <div className="col-25">
                  <label for="pNumber">Phone Number</label>
                </div>
                <div className="col-75">
                  <input type="text" id="pNumber" name="pNumber" placeholder="Phone Number.."/>
                </div>
              </div>                        
              <div className="row">
                <div className="col-25">
                  <label for="email">E-mail</label>
                </div>
                <div className="col-75">
                  <input type="text" id="email" name="email" placeholder="E-mail Address.."/>
                </div>
              </div>                        
              <div className="row">
                <div className="col-25">
                  <label for="city">City</label>
                </div>
                <div className="col-75">
                  <input type="text" id="city" name="city" placeholder="City.."/>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label for="address">Address</label>
                </div>
                <div className="col-75">
                  <input type="text" id="address" name="address" placeholder="Address.."/>
                </div>
              </div>                    
            </form>
          </div>
        </div>
      );
  }
}