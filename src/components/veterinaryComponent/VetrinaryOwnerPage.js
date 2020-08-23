import React from 'react';
import './VeterinaryOwnerPage.css';
import './Header.css';

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

            <div className="header">
                <a>Appet</a>
                <a>Adoption</a>
                <a>Veterinary</a>
                <a>Products</a>

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