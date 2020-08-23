import React from 'react';
import {SearchProductStore} from './SearchProductStore';
export default class ClientStoreView extends React.Component{
  constructor(props) {
    super(props);

  }
  render(){
    return(
      <div>
      <br/>
      <br/>
        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg" class="rounded" alt="Cinque Terre" width="304" height="236"/>
        <br/>
        <h1>Store1</h1>
        <br/>
        <br/>
        <SearchProductStore />
        <br/>
        <br/>
      </div>
    );
  }
}
