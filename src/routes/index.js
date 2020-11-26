import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Main from '../components/main/Main';
import Login from '../components/login/Login';
import Dogs from '../components/dogsComponent/dogs';
import DogProfile from '../components/dogProfileComponent/dogProfile';
import SignUp from '../components/signup/SignUp';
import AllianceDashboard from '../components/alliancesComponent/AllianceDashboard';
import AllianceClientPage from '../components/alliancesComponent/AllianceClientPage';
import DonorProfile from '../components/donorProfileComponent/DonorProfile';
import Pagos from '../components/pagos/pagos';
import AddPet from '../components/addPetComponent/AddPet';
import Notification from '../components/notificationComponent/Notification';

let isUser;
let isSupplier;
if(localStorage.getItem("isSupplier") === "false"){
  isUser = true;
  isSupplier = false;
}else if(localStorage.getItem("isSupplier") === "true"){
  isUser =false;
  isSupplier = true;
}

console.log(isUser + " " + isSupplier);

export default () => (

    <Router>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/signIn" exact component={Login} />
            <Route path="/signUp" exact component={SignUp} />
            <Route path="/adoption" exact component={Dogs} />
            <Route path="/dogprofile/:id" exact component={DogProfile}/>
            <Route path="/alliances" exact component={AllianceDashboard}/>
            <Route path="/allianceprofile/:id" exact component={AllianceClientPage}/>
            {isUser && <Route path="/donorprofile" exact component={DonorProfile}/>}
            {isUser && <Route path="/donation" exact component = {Pagos} />}
            {isUser && <Route path="/addpet" exact component = {AddPet} />}
            {isUser && <Route path="/notifications" exact component = {Notification} />}
        </Switch>

    </Router>
)
