import React from 'react';
import Pets from './Pets';
import {API_BASE_URL_BACK} from '../../constants/index';
import axios from 'axios';

export default class PetsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [{}]
    }
  }

  componentDidMount(){
    this.getPets();
  }

  getPets(){
    let petsInAdopt = axios.get(API_BASE_URL_BACK + '/pet/getpets')
    .then( petsInAdopt => {
      this.setState({pets : petsInAdopt.data})
      console.log(this.state.pets);
    })
  }

  render(){
      const petsList = this.state.pets.map((pet, index) => {
        return <Pets key={index} name={pet.petName} image={pet.image} gender={pet.gender} raza={pet.raza} edad={pet.edad} id={pet.id}/>
      });

    return(
      <div>
        <div className="card-deck">
          {petsList}
        </div>
      </div>
    );
  }
}
