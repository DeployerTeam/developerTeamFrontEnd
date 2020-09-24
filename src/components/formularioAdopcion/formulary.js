import React, { Component } from "react";
import './formulary.css';
import Button from 'react-bootstrap/Button'
export default class Formulary extends Component {
    constructor(props){
        super(props);

        this.state = {
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
            financially: ''    
        }
        
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
        event.preventDefault();

        let formulary = {
            name : this.state.name,
            age : this.state.age,
            gender : this.state.gender,
            phone : this.phone,
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
            financially: this.state.financially
        }

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
                    <form >
                        <div className="row">
                            <div className="col-25">
                                <label for="fname">Name</label>
                            </div>
                            <div className="col-75">
                                <input onChange={this.onChangeName} type="text" id="fname" name="firstname" placeholder="Complete Name.."/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="age">Age</label>
                            </div>
                            <div className="col-75">
                                <input onChange={this.onChangeAge} type="text" id="age" name="age" placeholder="Age.."/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="gender">Gender</label>
                            </div>
                            <div className="col-75">
                                <select value={this.state.gender} onChange={this.onChangeGender} id="gender" name="gender">
                                    <option value="" selected disabled hidden>Choose here</option>
                                    <option value="australia">Male</option>
                                    <option value="canada">Female</option>
                                    <option value="usa">Other</option>
                                </select>
                            </div>
                        </div>                        
                        <div className="row">
                            <div className="col-25">
                                <label for="pNumber">Phone Number</label>
                            </div>
                            <div className="col-75">
                                <input onChange={this.onChangePhone} type="text" id="pNumber" name="pNumber" placeholder="Phone Number.."/>
                            </div>
                        </div>                        
                        <div className="row">
                            <div className="col-25">
                                <label for="email">E-mail</label>
                            </div>
                            <div className="col-75">
                                <input onChange={this.onChangeEmail} type="text" id="email" name="email" placeholder="E-mail Address.."/>
                            </div>
                        </div>                        
                        <div className="row">
                            <div className="col-25">
                                <label for="city">City</label>
                            </div>
                            <div className="col-75">
                                <input onChange={this.onChangeCity} type="text" id="city" name="city" placeholder="City.."/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="address">Address</label>
                            </div>
                            <div className="col-75">
                                <input onChange={this.onChangeAddress} type="text" id="address" name="address" placeholder="Address.."/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="occupation">Occupation</label>
                            </div>
                            <div className="col-75">
                                <select value={this.state.occupation} onChange={this.onChangeOccupation} id="occupation" name="occupation">
                                    <option value="" selected disabled hidden>Choose here</option>
                                    <option value="student">Studing</option>
                                    <option value="employ">Employed</option>
                                    <option value="unemploy">Unemployed</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="lPlace">Type of Living Place</label>
                            </div>
                            <div className="col-75">
                                <select value={this.state.typePlace} onChange={this.onChangeTypePlace} id="lPlace" name="lPlace">
                                    <option value="" selected disabled hidden>Choose here</option>
                                    <option value="house">House</option>
                                    <option value="apartment">Apartment</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="ownerRent">Owner or Rent</label>
                            </div>
                            <div className="col-75">
                                <select value={this.state.ownerOrRent} onChange={this.onChangeOwnerOrRent} id="ownerRent" name="ownerRent">
                                    <option value="" selected disabled hidden>Choose here</option>
                                    <option value="owner">Owner</option>
                                    <option value="rent">Rent</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="whyAdopt">Why you want to adopt a pet?</label>
                            </div>
                            <div class="col-75">
                                <textarea id="whyAdopt" name="whyAdopt" placeholder="Write your answer.."></textarea>
                            </div>
                        </div>                        
                        <div className="row">
                            <div className="col-25">
                                <label for="allowPet">Are pets allowed in your living place?</label>
                            </div>
                            <div className="col-75">
                                <select value={this.state.allowed} onChange={this.onChangeAllowed} id="allowPet" name="allowPet">
                                    <option value="" selected disabled hidden>Choose here</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="allergic">Is someone in your living place allergic to pet's fur?</label>
                            </div>
                            <div className="col-75">
                                <select value={this.state.allergic} onChange={this.onChangeAllergic} id="allergic" name="allergic">
                                    <option value="" selected disabled hidden>Choose here</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="space">You have enough space in your living place for a pet?</label>
                            </div>
                            <div className="col-75">
                                <select value={this.state.space} onChange={this.onChangeSpace} id="space" name="space">
                                    <option value="" selected disabled hidden>Choose here</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>                        
                        <div class="row">
                            <div class="col-25">
                                <label for="subject">Have you got any pets? (Number, type, age) </label>
                            </div>
                            <div class="col-75">
                                <textarea id="subject" onChange={this.onChangePets} name="subject" placeholder="Write your answer.."></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="subject">Are you financially stable? if not who is going to pay for the needs of your pet? </label>
                            </div>
                            <div class="col-75">
                                <textarea id="subject" onChange={this.onChangeFinancially} name="subject" placeholder="Write your answer.."></textarea>
                            </div>
                        </div>

                            <Button variant="primary">
                                Submit
                            </Button>
                        
                    </form>
                </div>
        );
    }
}