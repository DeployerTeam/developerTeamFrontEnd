import React from 'react';
import { Link } from 'react-router-dom';

export default class ClassName extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(

      <div>
          <div className="card" style={{width: "14rem", background:"#BDBDBD" }}>
              <div className="card-header" > {this.props.name} </div>
              <img className="card-img-top rounded-0" src={this.props.image} alt="Card image cap" height="185px"/>
              <div className="card-body">
                  <br/>

                  <Link className="btn btn-primary" to={{ pathname: "/dogProfile/" + this.props.id,
                              state: {pets: this.props}}}>Ver perfil</Link>
              </div>
          </div>
      <br/>
      </div>
    );
  }

}
