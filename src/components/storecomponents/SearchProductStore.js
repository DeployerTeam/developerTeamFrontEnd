import React from 'react';

export default class SearchProductStore extends React.Component{
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
        <div>
          <form onSubmit={this.handleSubmitSearch}>
            <div className="input-group mb-3">
              <input type="text" onChange={this.handleChangeSearchBar} className="form-control" placeholder="Product" aria-label="Product" aria-describedby="button-addon2" />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="submit" id="search">Search</button>
              </div>
            </div>
          </form>
        </div>
    );
  }

}
