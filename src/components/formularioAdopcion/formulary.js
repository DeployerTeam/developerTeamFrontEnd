import React, { Component } from "react";
import './formulary.css';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import {API_BASE_URL_BACK} from '../../constants/index';
import Swal from 'sweetalert2';
export default class Formulary extends Component {
    constructor(props){
        super(props);
        this.state = {
            idPet: window.location.pathname.split("/")[2],
            name : '',
            age : '',
            gender : '',
            phone : '',
            email : '',
            city : '',
            address : '',
            occupation : '',
            typePlace: '',
            ownerOrRent: '',
            motive: '',
            allowed: '',
            allergic: '',
            space: '',
            pets: '',
            financially: '',
            photo: props.pet.image
        }
        console.log(this.state.idPet);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeOccupation = this.onChangeOccupation.bind(this);
        this.onChangeTypePlace = this.onChangeTypePlace.bind(this);
        this.onChangeOwnerOrRent = this.onChangeOwnerOrRent.bind(this);
        this.onChangeMotive = this.onChangeMotive.bind(this);
        this.onChangeAllowed = this.onChangeAllowed.bind(this);
        this.onChangeAllergic = this.onChangeAllergic.bind(this);
        this.onChangeSpace = this.onChangeSpace.bind(this);
        this.onChangePets = this.onChangePets.bind(this);
        this.onChangeFinancially = this.onChangeFinancially.bind(this);

    }

    handleSubmit(event){
      console.log(this.state.photo)
        event.preventDefault();
        console.log(this.state.idPet + " Este es el id del perrito")

        const adoptForm = {
            idPet : this.state.idPet,
            name : this.state.name,
            age : this.state.age,
            gender : this.state.gender,
            phone : this.state.phone,
            email : this.state.email,
            city : this.state.city,
            address : this.state.address,
            occupation : this.state.occupation,
            typePlace: this.state.typePlace,
            ownerOrRent: this.state.ownerOrRent,
            motive: this.state.motive,
            allowed: this.state.allowed,
            allergic: this.state.allergic,
            space: this.state.space,
            pets: this.state.pets,
            financially: this.state.financially,
            photo: this.state.photo

        }

        axios.post(API_BASE_URL_BACK + "/user/addform", adoptForm)
        .then(async res => {
          console.log("Agregando Solicitud de adopción");
          await Swal.fire({
              title: 'Solicitud exitosa!',
              type: 'success',
              icon: 'success',
              confirmButtonColor: '#3085d6',
              text: `Solicitud de adopción realizada a ${this.state.name}`,
          })
        })

    }



    onChangeName(event){
        this.setState({
          name: event.target.value
        });
    }

    onChangeAge(event){
        this.setState({
          age: event.target.value
        });
    }

    onChangeGender(event){
        this.setState({
          gender: event.target.value
        });
    }

    onChangePhone(event){
        this.setState({
          phone: event.target.value
        });
        console.log(this.state.phone);
    }

    onChangeEmail(event){
        this.setState({
          email: event.target.value
        });
    }

    onChangeCity(event){
        this.setState({
          city: event.target.value
        });
    }

    onChangeAddress(event){
        this.setState({
          address: event.target.value
        });
    }

    onChangeOccupation(event){
        console.log(event.target.value);
        this.setState({
          occupation: event.target.value
        });
    }

    onChangeTypePlace(event){
        this.setState({
          typePlace: event.target.value
        });
    }

    onChangeOwnerOrRent(event){
        this.setState({
          ownerOrRent: event.target.value
        });
    }

    onChangeMotive(event){
        this.setState({
          motive: event.target.value
        });
    }

    onChangeAllowed(event){
        this.setState({
          allowed: event.target.value
        });
    }

    onChangeAllergic(event){
        this.setState({
          allergic: event.target.value
        });
    }

    onChangeSpace(event){
        this.setState({
          space: event.target.value
        });
    }

    onChangePets(event){
        this.setState({
          pets: event.target.value
        });
    }

    onChangeFinancially(event){
        this.setState({
          financially: event.target.value
        });
    }



    render(){
        return(
            <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-25">
                                <label for="fname">Nombre</label>
                            </div>
                            <div className="col-75">
                                <input onChange={this.onChangeName} type="text" id="fname" name="firstname" placeholder="Complete Name.." required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="age">Edad</label>
                            </div>
                            <div className="col-75">
                                <input onChange={this.onChangeAge} type="text" id="age" name="age" placeholder="Age.." required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="gender">Genero</label>
                            </div>
                            <div className="col-75">
                                <select value={this.state.gender} onChange={this.onChangeGender} id="gender" name="gender" required>
                                    <option value="" selected disabled hidden>Seleccione</option>
                                    <option value="male">Masculino</option>
                                    <option value="female">Femenino</option>
                                    <option value="other">Otro</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="pNumber">Numero telefonico</label>
                            </div>
                            <div className="col-75">
                                <input onChange={this.onChangePhone} type="text" id="pNumber" name="pNumber" placeholder="Phone Number.." required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="email">E-mail</label>
                            </div>
                            <div className="col-75">
                                <input onChange={this.onChangeEmail} type="text" id="email" name="email" placeholder="E-mail Address.." required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="city">Ciudad</label>
                            </div>
                            <div className="col-75">
                                <input onChange={this.onChangeCity} type="text" id="city" name="city" placeholder="City.." required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="address">Dirección</label>
                            </div>
                            <div className="col-75">
                                <input onChange={this.onChangeAddress} type="text" id="address" name="address" placeholder="Address.." required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="occupation">Ocupación</label>
                            </div>
                            <div className="col-75">
                                <select value={this.state.occupation} onChange={this.onChangeOccupation} id="occupation" name="occupation" required>
                                    <option value="" selected disabled hidden>Seleccione</option>
                                    <option value="student">Estudiante</option>
                                    <option value="employ">Empleado</option>
                                    <option value="unemploy">Desempleado</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="lPlace">Tipo de vivienda</label>
                            </div>
                            <div className="col-75">
                                <select value={this.state.typePlace} onChange={this.onChangeTypePlace} id="lPlace" name="lPlace" required>
                                    <option value="" selected disabled hidden>Seleccione</option>
                                    <option value="house">Casa</option>
                                    <option value="apartment">Apartamento</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="ownerRent">Propietario o Arrendatario</label>
                            </div>
                            <div className="col-75">
                                <select value={this.state.ownerOrRent} onChange={this.onChangeOwnerOrRent} id="ownerRent" name="ownerRent" required>
                                    <option value="" selected disabled hidden>Seleccione</option>
                                    <option value="owner">Propietario</option>
                                    <option value="rent">Arrendatario</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="whyAdopt">¿Por qué quiere adoptar?</label>
                            </div>
                            <div class="col-75">
                                <textarea id="whyAdopt" name="whyAdopt" placeholder="Write your answer.." required></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="allowPet">¿Las mascotas son permitidas en su vivienda?</label>
                            </div>
                            <div className="col-75">
                                <select value={this.state.allowed} onChange={this.onChangeAllowed} id="allowPet" name="allowPet" required>
                                    <option value="" selected disabled hidden>Seleccione</option>
                                    <option value="yes">Si</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="allergic">¿Alguien en su vivienda es alergico a las mascotas?</label>
                            </div>
                            <div className="col-75">
                                <select value={this.state.allergic} onChange={this.onChangeAllergic} id="allergic" name="allergic" required>
                                    <option value="" selected disabled hidden>Seleccione</option>
                                    <option value="yes">Si</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="space">¿Tiene suficiente espacio para una mascota?</label>
                            </div>
                            <div className="col-75">
                                <select value={this.state.space} onChange={this.onChangeSpace} id="space" name="space" required>
                                    <option value="" selected disabled hidden>Seleccione</option>
                                    <option value="yes">Si</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="subject">¿Tiene alguna mascota? (Cantidad, tipo, edad) </label>
                            </div>
                            <div class="col-75">
                                <textarea id="subject" onChange={this.onChangePets} name="subject" placeholder="Write your answer.." required></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="subject">¿Es financieramente estable? si no ¿Quien va a hacerse cargo de los gastos? </label>
                            </div>
                            <div class="col-75">
                                <textarea id="subject" onChange={this.onChangeFinancially} name="subject" placeholder="Write your answer.." required></textarea>
                            </div>
                        </div>

                            <Button type="submit" variant="primary">
                                Enviar
                            </Button>

                    </form>
                </div>
        );
    }
}
