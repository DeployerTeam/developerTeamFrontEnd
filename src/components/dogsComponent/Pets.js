import React from 'react';

export default class ClassName extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
          <div className="card" style={{width: "14rem"}}>
              <div className="card-header"> {this.props.name} </div>
              <img className="card-img-top rounded-0" src={this.props.image} alt="Card image cap" height="185px"/>
              <div className="card-body">
                  <br/>
                  <a href="/dogProfile" className="btn btn btn-primary">See Profile</a>
              </div>
          </div>
      <br/>
      </div>
    );
  }

}
