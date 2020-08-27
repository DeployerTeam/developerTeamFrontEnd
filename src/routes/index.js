import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Main from '../components/main/Main';
import Login from '../components/login/Login';
import Dogs from '../components/dogsComponent/dogs';
import DogProfile from '../components/dogProfileComponent/dogProfile';
import SignUp from '../components/signup/SignUp';
import VeterinaryOwnerPage from '../components/veterinaryComponent/VetrinaryOwnerPage';
import ProductListStore from '../components/storecomponents/ProductListStore';
import DogProfile from '../components/dogProfileComponent/dogProfile';

import Profile from '../components/profile/Profile';

const test = [{name: "Product1", price: 50000, description: "Comida"},
{name: "Product2", price: 50001, description: "Comida"},
{name: "Product3", price: 50002, description: "Comida"},
{name: "Product4", price: 50003, description: "Comida"},
{name: "Product5", price: 50004, description: "Comida"},
{name: "Product6", price: 50005, description: "Comida"},
{name: "Product7", price: 50006, description: "Comida"},
{name: "Product8", price: 50007, description: "Comida"},
{name: "Product9", price: 50008, description: "Comida"},
{name: "Product10", price: 50009, description: "Comida"}];

import DonorProfile from '../components/donorProfileComponent/DonorProfile';



export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/signIn" exact component={Login} />
            <Route path="/signUp" exact component={SignUp} />
            <Route path="/adoption" exact component={Dogs} />
            <Route path="/dogProfile" exact component={DogProfile}/>
            <Route path="/veterinary" exact component={VeterinaryOwnerPage} />
            <Route path="/store" exact component={ProductListStore}/>
            <Route path="/profile" exact component={Profile}/>

        </Switch>
    </Router>
)
