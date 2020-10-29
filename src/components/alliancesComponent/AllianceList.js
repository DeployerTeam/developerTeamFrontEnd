import React from 'react';
import Alliance from './Alliance';
import {API_BASE_URL_BACK} from '../../constants/index';
import axios from 'axios';

export default class AllianceList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          alliances: [{}]
        }
    }

    componentDidMount(){
      this.getAlliances();
    }

    getAlliances(){
      let allAlliances = axios.get(API_BASE_URL_BACK + '/proveedores')
      .then( allAlliances => {
        this.setState({alliances : allAlliances.data})
        console.log(this.state.alliances);
      })
    }

    render(){

      const allianceList = this.state.alliances.map((ally, index) => {
        return <Alliance key={index} name={ally.name} city={ally.city} address={ally.address} phone={ally.phone} email={ally.email}/>
      });

      return(
        <div>
          <div className="card-deck">
            {allianceList}
          </div>
        </div>
      );

      }
}
