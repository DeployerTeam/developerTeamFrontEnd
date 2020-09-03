import React from 'react';
import './VeterinaryOwnerPage.css';
import Header from '../headerComponent/header';

export default class VeterinaryOwnerPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  render(){
    return (
        <div className="general">
          
          <div className="row">
            <Header/>
          </div>

          <div className="mainImage">
            <img src= "https://brisbanevs.com/storage/app/media/ramona/vet-ple-ramona-feature-image-2.jpg" width="65%" />
          </div>


            <div className="services">
                
            </div>
        </div>

    );
  }

}