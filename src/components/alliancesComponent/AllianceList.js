import React from 'react';
import Alliance from './Alliance'


export default class AllianceList extends React.Component {

    constructor(props){
        super(props);
      }

      render(){
        const products = [{name: "Alliance1", price: 50000, description: "Vet Market"},
        {name: "Alliance2", price: 50001, description: "Vet Market"},
        {name: "Alliance3", price: 50002, description: "Vet Market"},
        {name: "Alliance4", price: 50003, description: "Vet Market"},
        {name: "Alliance5", price: 50004, description: "Vet Market"},
        {name: "Alliance6", price: 50005, description: "Vet Market"},
        {name: "Alliance7", price: 50006, description: "Vet Market"},
        {name: "Alliance8", price: 50007, description: "Vet Market"},
        {name: "Alliance9", price: 50008, description: "Vet Market"},
        {name: "Alliance10", price: 50009, description: "Vet Market"}];

        const allianceList = products.map((product, index) => {
          return <Alliance key={index} name={product.name} price={product.price} description={product.description}/>

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
