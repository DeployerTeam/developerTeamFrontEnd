import React from 'react';
import Veterinary from './Veterinary'


export default class VeterinaryList extends React.Component {

    constructor(props){
        super(props);
      }
      
      render(){
        const products = [{name: "Veterinary1", price: 50000, description: "Vet Market"},
        {name: "Veterinary2", price: 50001, description: "Vet Market"},
        {name: "Veterinary3", price: 50002, description: "Vet Market"},
        {name: "Veterinary4", price: 50003, description: "Vet Market"},
        {name: "Veterinary5", price: 50004, description: "Vet Market"},
        {name: "Veterinary6", price: 50005, description: "Vet Market"},
        {name: "Veterinary7", price: 50006, description: "Vet Market"},
        {name: "Veterinary8", price: 50007, description: "Vet Market"},
        {name: "Veterinary9", price: 50008, description: "Vet Market"},
        {name: "Veterinary10", price: 50009, description: "Vet Market"}];
        
        const veterinaryList = products.map((product, index) => {
          return <Veterinary key={index} name={product.name} price={product.price} description={product.description}/>
          
        });
    
        return(
          <div>
            <div className="card-deck">
              {veterinaryList}
            </div>
          </div>
        );

        }
}