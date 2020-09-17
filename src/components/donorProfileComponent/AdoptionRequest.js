import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

export class AdoptionRequest extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div>
                <br>
                </br>
                <Grid container spacing={2}>

                    <Grid item xs={6}>
                        <CardMedia
                            style={{ height: "800px", weight: "600" }}
                            image="https://s1.eestatic.com/2020/02/10/como/Agua-Vacunas-Infecciones-Perros-Alimentacion-Bebes-Como_hacer_466466419_144847068_1024x576.jpg"
                        />                        
                    </Grid>

                    <Grid item xs={6}>
                        <Paper>Formato diligenciado</Paper>
                    </Grid>
                </Grid>

            </div>
        );
    }
}