import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';


export class AdoptionRequest extends Component{
    constructor(props){
        super(props);        
        this.state = {
            form: this.props.dataform
        }
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

            </div>
            </form>
        );
    }
}
