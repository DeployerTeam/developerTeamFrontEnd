import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

export class AdoptionRequest extends Component{
    constructor(props){
        super(props);
        console.log(this.props.dataform)
        this.state = {
            form: this.props.dataform
        }
        console.log(this.state.form)
    }

    render(){
        return (
            <div>
                <CardMedia
                    style={{ height: "800px", weight: "600" }}
                    image="https://s1.eestatic.com/2020/02/10/como/Agua-Vacunas-Infecciones-Perros-Alimentacion-Bebes-Como_hacer_466466419_144847068_1024x576.jpg"
                /> 
                <p>{this.state.form.name}</p>  
                <p>{this.state.form.age}</p>  
                <p>{this.state.form.gender}</p>  
                <p>{this.state.form.phone}</p>  
                <p>{this.state.form.email}</p>  
                <p>{this.state.form.city}</p>  
                   
            </div>
        );
    }
}