import React from 'react';
export default class AddProductStore extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      price: 0,
      description: ''
    };

    this.handleSubmitAddProduct = this.handleSubmitAddProduct.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
  }

  handleSubmitAddProduct(event){
    event.preventDefault();
  }

  handleChangeName(event){
    this.setState({ name: event.target.value});
  }

  handleChangePrice(event){
    this.setState({ price: event.target.value});
  }

  handleChangeDescription(event){
    this.setState({ description: event.target.value});
  }


  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmitAddProduct}>
          <div>
            <label for="names">Add Product</label>
            <br/>
            <label for="names">Product Name</label>
            <input type="text" onChange={this.handleChangeName} className="form-control" placeholder="Name" aria-label="Product" aria-describedby="button-addon2" />
            <br/>
            <label for="prices">Product Price</label>
            <input type="number" onChange={this.handleChangePrice} className="form-control" placeholder="Price" aria-label="Product" aria-describedby="button-addon2" />
            <br/>
            <label for="descriptions">Product Description</label>
            <input type="text" onChange={this.handleChangeDescription} className="form-control" placeholder="description" aria-label="Product" aria-describedby="button-addon2" />
            <br/>
            <button className="btn btn-outline-secondary" type="submit" id="search">Add Product</button>
          </div>
        </form>
      </div>
    );
  }
}
