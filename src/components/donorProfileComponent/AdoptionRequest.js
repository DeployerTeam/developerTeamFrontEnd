import React, {Component} from 'react';

import CardMedia from '@material-ui/core/CardMedia';
import Button from 'react-bootstrap/Button'
import {API_BASE_URL_BACK} from '../../constants/index';
import axios from 'axios';


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
        console.log(this.state.form);
        let generate = {
                "id": 0,
                "code": "",
                "redeemed": false,
                "ownerEmail": this.state.form.email
            }

        axios.post(API_BASE_URL_BACK + "/bono/generate", generate);
    }

    denyRequest(event){
        event.preventDefault();

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
                    <Button type="button"  variant="primary">
                        Denegar Solicitud
                    </Button>               
                </div>


            </div>
            </form>
        );
    }
}
