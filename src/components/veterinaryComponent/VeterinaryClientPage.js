import React from 'react';
import './VeterinaryClientPage.css';
import './Header.css';

export class VeterinaryClientPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
    this.handleChangeSearchBar = this.handleChangeSearchBar.bind(this);
  }

  handleSubmitSearch(event){
    event.preventDefault();
    console.log(this.state.search);
  }


  handleChangeSearchBar(event){
    this.setState({ search: event.target.value});
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


            <div className="searchBox" width="50%">
                <form onSubmit={this.handleSubmitSearch}>
                    <div className="input-group mb-3">
                        <input type="text" onChange={this.handleChangeSearchBar} className="form-control" placeholder="Veterinaris" aria-label="Veterinaris" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-dark" type="submit" id="search">Search</button>
                        </div>
                    </div>
                </form>
            </div>

            <div >
            </div>
        </div>

    );
  }

}