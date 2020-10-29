import React from 'react';
import { Link } from 'react-router-dom';

export default class Alliance extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props);
      }

      render(){
        return (
            <div>
                <div className="card" style={{width: "14rem",background:"#BDBDBD"}}>
                    <div className="card-header"> {this.props.name} </div>
                    <img className="card-img-top rounded-0" src="https://www.bls.gov/opub/btn/volume-8/images/veterinary-occupations.jpg" alt="Card image cap"/>
                    <div className="card-body">
                        <div className="card-text"> {this.props.city} </div>
                        <br/>
                        <Link className="btn btn-primary" to={{ pathname: "/allianceprofile/" + this.props.name,
                              state: {alliances: this.props}}}>Ver perfil</Link>
                    </div>
                </div>
            <br/>
            </div>
        );
      }
}
