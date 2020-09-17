import React, { Component } from "react";
import './formulary.css';

export default class Formulary extends Component {

    render(){
        return(
            <div className="container">
                    <form >
                        <div className="row">
                            <div className="col-25">
                                <label for="fname">Name</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="fname" name="firstname" placeholder="Complete Name.."/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="age">Age</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="age" name="age" placeholder="Age.."/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="gender">Gender</label>
                            </div>
                            <div className="col-75">
                                <select id="gender" name="gender">
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
                                <input type="text" id="pNumber" name="pNumber" placeholder="Phone Number.."/>
                            </div>
                        </div>                        
                        <div className="row">
                            <div className="col-25">
                                <label for="email">E-mail</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="email" name="email" placeholder="E-mail Address.."/>
                            </div>
                        </div>                        
                        <div className="row">
                            <div className="col-25">
                                <label for="city">City</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="city" name="city" placeholder="City.."/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="address">Address</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="address" name="address" placeholder="Address.."/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="occupation">Occupation</label>
                            </div>
                            <div className="col-75">
                                <select id="occupation" name="occupation">
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
                                <select id="lPlace" name="lPlace">
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
                                <select id="ownerRent" name="ownerRent">
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
                                <select id="allowPet" name="allowPet">
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
                                <select id="allergic" name="allergic">
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
                                <select id="space" name="space">
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
                                <textarea id="subject" name="subject" placeholder="Write your answer.."></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="subject">Are you financially stable? if not who is going to pay for the needs of your pet? </label>
                            </div>
                            <div class="col-75">
                                <textarea id="subject" name="subject" placeholder="Write your answer.."></textarea>
                            </div>
                        </div>
                    </form>
                </div>
        );
    }
}