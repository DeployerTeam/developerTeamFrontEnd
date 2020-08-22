import React from 'react';
import {ProductStore} from './ProductStore';
export class ProductListStore extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    const productList = this.props.products.map((product, index) => {
      return <ProductStore key={index} name={product.name} price={product.price} description={product.description}/>
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
