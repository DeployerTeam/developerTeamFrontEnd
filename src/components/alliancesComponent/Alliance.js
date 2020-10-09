import React from 'react';


export default class Alliance extends React.Component {
    constructor(props){
        super(props);
      }

      render(){
        return (
            <div>
                <div className="card" style={{width: "14rem",background:"#BDBDBD"}}>
                    <div className="card-header"> {this.props.name} </div>
                    <img className="card-img-top rounded-0" src="https://www.bls.gov/opub/btn/volume-8/images/veterinary-occupations.jpg" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title"> {"$ " + this.props.price} </h5>
                        <div className="card-text"> {this.props.description} </div>
                        <br/>
                        <a href="/allianceprofile" className="btn btn-primary">Ver perfil</a>
                    </div>
                </div>
            <br/>
            </div>
        );
      }
}
