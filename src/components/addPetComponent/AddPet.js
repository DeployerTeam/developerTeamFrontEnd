import React,{Component} from 'react';
import {API_BASE_URL_BACK} from '../../constants/index';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

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
        axios.post(API_BASE_URL_BACK + "/pet/add", pet)
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
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col-25">
                            <label for="fname">Pet Name</label>
                        </div>
                        <div className="col-75">
                            <input onChange={this.onChangePetName} type="text" id="fname" name="firstname" placeholder="Complete Name.."/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="fname">URL Image</label>
                        </div>
                        <div className="col-75">
                            <input onChange={this.onChangeImage} type="text" id="fname" name="firstname" placeholder="URL image"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="fname">Raza</label>
                        </div>
                        <div className="col-75">
                            <input onChange={this.onChangeRaza} type="text" id="fname" name="firstname" placeholder="Raza"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-25">
                            <label for="fname">Edad</label>
                        </div>
                        <div className="col-75">
                            <input onChange={this.onChangeEdad} type="text" id="fname" name="firstname" placeholder="Edad"/>
                        </div>
                    </div>

                    <div className="col-75">
                        <select value={this.state.gender} onChange={this.onChangeGender} id="gender" name="gender">
                            <option value="" selected disabled hidden>Choose here</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <Button onClick={this.handleSubmit} variant="primary">
                        Publish
                    </Button>
                </form>
            </div>
        );
    }



}