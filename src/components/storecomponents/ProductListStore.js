import React from 'react';
import {ProductS} from './ProductStore';
export default class ProductListStore extends React.Component{
  constructor(props){
    super(props);
    

  }
  render(){
    const products = [{name: "Product1", price: 50000, description: "Comida"},
    {name: "Product2", price: 50001, description: "Comida"},
    {name: "Product3", price: 50002, description: "Comida"},
    {name: "Product4", price: 50003, description: "Comida"},
    {name: "Product5", price: 50004, description: "Comida"},
    {name: "Product6", price: 50005, description: "Comida"},
    {name: "Product7", price: 50006, description: "Comida"},
    {name: "Product8", price: 50007, description: "Comida"},
    {name: "Product9", price: 50008, description: "Comida"},
    {name: "Product10", price: 50009, description: "Comida"}];
    const productList = products.map((product, index) => {
      return <ProductS key={index} name={product.name} price={product.price} description={product.description}/>
      // return "";
    });

    return(
      <div>
        <div className="card-deck">
          {productList}
        </div>
      </div>
    );
  }

}
