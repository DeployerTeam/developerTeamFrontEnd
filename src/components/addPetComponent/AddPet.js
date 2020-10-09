import React,{Component} from 'react';
import {API_BASE_URL_BACK} from '../../constants/index';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './AddPet.css';
import Swal from 'sweetalert2';

export default class AddPet extends Component{
    constructor(props){
        super(props);
        this.state = {
            petName : '',
            userDonor : localStorage.getItem("localEmail"),
            image : '',
            gender : '',
            raza : '',
            edad: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangePetName = this.onChangePetName.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeRaza = this.onChangeRaza.bind(this);
        this.onChangeEdad = this.onChangeEdad.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        let pet = { petName:this.state.petName,
                    userDonor:this.state.userDonor,
                    image:this.state.image,
                    gender:this.state.gender,
                    raza:this.state.raza,
                    edad:this.state.edad
        }
        axios.post(API_BASE_URL_BACK + "/pet/add", pet).then(async () => {
          await Swal.fire({
              title: 'Mascota Nueva!',
              type: 'success',
              icon: 'success',
              confirmButtonColor: '#3085d6',
              text: `Mascota ${this.state.petName} añadida con exito!`,
          })
          this.props.history.push("/adoption");

        },error =>{
            Swal.fire({
                title: 'Error al añadir mascota!',
                type: 'error',
                icon: 'error',
                confirmButtonColor: '#3085d6',
                text: `Mascota ${this.state.petName} no fue añadida a la base de datos!`,
            })
          })
    }

    onChangePetName(event){
        this.setState({
          petName: event.target.value
        });
    }

    onChangeImage(event){
        this.setState({
          image : event.target.value
        });
    }

    onChangeGender(event){
        this.setState({
          gender : event.target.value
        });
    }

    onChangeRaza(event){
        this.setState({
          raza : event.target.value
        });
    }

    onChangeEdad(event){
        this.setState({
          edad : event.target.value
        });
    }

    render(){
        return(
            <div className="container containerl">
                <form className="formulary" onSubmit={this.handleSubmit}>
                <h1>Interested in giving adoption, please complete formulary</h1>
                    <div className="row">
                        <div className="col-25">
                            <label for="fname">Pet Name</label>
                        </div>
                        <div className="col-75">
                            <input onChange={this.onChangePetName} type="text" id="fname" name="firstname" placeholder="Complete Name.." required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="fname">URL Image</label>
                        </div>
                        <div className="col-75">
                            <input onChange={this.onChangeImage} type="text" id="fname" name="firstname" placeholder="URL image" required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="fname">Raza</label>
                        </div>
                        <div className="col-75">
                            <input onChange={this.onChangeRaza} type="text" id="fname" name="firstname" placeholder="Raza" required/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label for="fname">Edad</label>
                        </div>
                        <div className="col-75">
                            <input onChange={this.onChangeEdad} type="text" id="fname" name="firstname" placeholder="Edad" required/>
                        </div>
                    </div>

                    <div className="col-75">
                        <select value={this.state.gender} onChange={this.onChangeGender} id="gender" name="gender" required>
                            <option value="" selected disabled hidden>Choose here</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <Button className="botonSubmit btn btn-success" type="submit">
                        Publish
                    </Button>
                </form>
            </div>
        );
    }



}
