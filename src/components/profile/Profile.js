
import React, { Component } from "react";
import Form from 'react-bootstrap/Form'



export default class Profile extends Component {

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
                  <input type="text" id="fname" name="firstname" placeholder="Complete Name.."/>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label for="age">Edad</label>
                </div>
                <div className="col-75">
                  <input type="text" id="age" name="age" placeholder="Age.."/>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label for="gender">Genero</label>
                </div>
                <div className="col-75">
                  <select id="gender" name="gender">
                    <option value="" selected disabled hidden>Seleccione</option>
                    <option value="australia">Masculino</option>
                    <option value="canada">Femenino</option>
                    <option value="usa">Otro</option>
                  </select>
                </div>
              </div>                        
              <div className="row">
                <div className="col-25">
                  <label for="pNumber">Numero telefonico</label>
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
                  <label for="city">Ciudad</label>
                </div>
                <div className="col-75">
                  <input type="text" id="city" name="city" placeholder="City.."/>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label for="address">Dirección</label>
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