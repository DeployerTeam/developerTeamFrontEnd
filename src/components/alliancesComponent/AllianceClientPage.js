import React from 'react';
import './AllianceClientPage.css';
import Header from '../headerComponent/header';
import AllianceList from './AllianceList'

export default class AllianceClientPage extends React.Component{
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
          <div className="row">
            <Header/>
          </div>

          <div className="mainImage">
            <img src= "https://brisbanevs.com/storage/app/media/ramona/vet-ple-ramona-feature-image-2.jpg" width="65%" />
          </div>

          <div className="searchBox" width="50%">
            <form onSubmit={this.handleSubmitSearch}>
              <div className="input-group mb-3">
                <input type="text" onChange={this.handleChangeSearchBar} className="form-control" placeholder="Alliances" aria-label="Alliances" aria-describedby="button-addon2" />
                <div className="input-group-append">
                  <button className="btn btn-dark" type="submit" id="search">Search</button>
                </div>
              </div>
            </form>
          </div>
          <br/>
          <div className="alliances">
            <AllianceList/>
          </div>
        </div>

    );
  }

}