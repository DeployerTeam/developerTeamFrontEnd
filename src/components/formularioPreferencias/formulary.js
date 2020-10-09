import React, { Component } from "react";
import './formulary.css';
import Button from 'react-bootstrap/Button'
export default class Formulary extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
                <form >
                    <div className="row">
                        <div className="col-25">
                            <label for="tamaño">¿De que tamaño prefiere su mascota?</label>
                        </div>
                        <div className="col-75">
                            <select onChange={this.onChangeGender} id="tamaño" name="tamaño">
                                <option value="" selected disabled hidden>Seleccione</option>
                                <option value="grande">Grande</option>
                                <option value="mediana">Mediana</option>
                                <option value="pequeña">Pequeña</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="actividad">¿Que actividades le gusta realizar?</label>
                        </div>
                        <div className="col-75">
                            <select onChange={this.onChangeGender} id="actividad" name="actividad">
                                <option value="" selected disabled hidden>Seleccione</option>
                                <option value="deporte">Deporte</option>
                                <option value="series">Ver series</option>
                                <option value="jugar">Jugar</option>
                                <option value="dormir">Dormir</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="mascota">¿Que que tipo de mascotas prefiere?</label>
                        </div>
                        <div className="col-75">
                            <select onChange={this.onChangeGender} id="mascota" name="mascota">
                                <option value="" selected disabled hidden>Seleccione</option>
                                <option value="perro">Perro</option>
                                <option value="gato">Gato</option>
                                <option value="otra">Otra</option>
                                <option value="cualquiera">Cualquiera</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="hijos">¿Tiene niños en su casa?</label>
                        </div>
                        <div className="col-75">
                            <select onChange={this.onChangeGender} id="hijos" name="hijos">
                                <option value="" selected disabled hidden>Seleccione</option>
                                <option value="si">Si</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                    <Button variant="primary">
                        Enviar
                    </Button>
                </form>
            </div>
            );
        }
    }