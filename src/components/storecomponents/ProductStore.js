import React from 'react';


export class ProductStore extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <div className="card" style={{width: "14rem"}}>
          <div className="card-header"> {this.props.name} </div>
          <img className="card-img-top rounded-0" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg" alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title"> {"$ " + this.props.price} </h5>
            <div className="card-text"> {this.props.description} </div>
            <br/>
            <a href="#" className="btn btn-primary"> Agregar </a>
          </div>
        </div>
        <br/>
      </div>
    );
  }

}