import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Main from '../components/main/Main';
import Login from '../components/login/Login';
import Dogs from '../components/dogsComponent/dogs';
import DogProfile from '../components/dogProfileComponent/dogProfile';
import SignUp from '../components/signup/SignUp';
import VeterinaryOwnerPage from '../components/veterinaryComponent/VetrinaryOwnerPage';
import ProductListStore from '../components/storecomponents/ProductListStore';
import DonorProfile from '../components/donorProfileComponent/DonorProfile';
import Profile from '../components/profile/Profile';



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
            <Route path="/donorprofile" exact component={DonorProfile}/>
        </Switch>
    </Router>
)
