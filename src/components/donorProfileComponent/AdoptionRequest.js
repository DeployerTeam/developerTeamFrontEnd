import React, {Component} from 'react';

import CardMedia from '@material-ui/core/CardMedia';
import Button from 'react-bootstrap/Button'
import {API_BASE_URL_BACK} from '../../constants/index';
import axios from 'axios';
import Swal from 'sweetalert2';

export class AdoptionRequest extends Component{
    constructor(props){
        super(props);
        this.state = {
            form: this.props.dataform
        }
        this.approveRequest = this.approveRequest.bind(this);
        this.denyRequest = this.denyRequest.bind(this);
    }

    approveRequest(event){
        event.preventDefault();
        let generate = {
                "id": 0,
                "code": "",
                "redeemed": false,
                "ownerEmail": this.state.form.email
            }

        axios.post(API_BASE_URL_BACK + "/bono/generate", generate).then(() => {
            axios.delete(`${API_BASE_URL_BACK}/pet/delete?petId=${this.state.form.idPet}&email=${this.state.form.email}`).then(() => {
              this.props.close();
              Swal.fire({
                  title: '¡Solicitud de adopción aceptada!',
                  type: 'success',
                  icon: 'success',
                  confirmButtonColor: '#3085d6',
                  text: `Usuario ${this.state.form.email} aprobado para adoptar`,
              }).then(() => window.location.reload())

            });
        })

    }

  denyRequest(event){
        axios.post(API_BASE_URL_BACK+ `/user/deleterequest?email=${this.state.form.email}&petId=${this.state.form.idPet}`).then(() =>{
          this.props.close();
          Swal.fire({
              title: '¡Solicitud de adopción rechazada!',
              type: 'error',
              icon: 'error',
              confirmButtonColor: '#3085d6',
              text: `Usuario ${this.state.form.email} no aprobado para adoptar`,
          }).then(() => window.location.reload())
        });

    }

    render(){
        return (
            <form className="container mt-5 bg-white">
            <div>
                <CardMedia
                    style={{ height: "500px", weight: "300px" }}
                    image={this.state.form.photo}
                />
                <p><h3>Nombre: </h3>{this.state.form.name}</p>
                <p><h3>Edad: </h3>{this.state.form.age}</p>
                <p><h3>Genero: </h3>{this.state.form.gender}</p>
                <p><h3>Telefono: </h3>{this.state.form.phone}</p>
                <p><h3>Email: </h3>{this.state.form.email}</p>
                <p><h3>Ciudad: </h3>{this.state.form.city}</p>
                <div>
                    <Button type="button" onClick={this.approveRequest} variant="primary">
                        Aprobar Solicitud
                    </Button>
                    <Button type="button"  onClick={this.denyRequest} variant="primary">
                        Denegar Solicitud
                    </Button>
                </div>


            </div>
            </form>
        );
    }
}
