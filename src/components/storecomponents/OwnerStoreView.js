import React from 'react';
import {ProductListStore} from './ProductListStore';
import {AddProductStore} from './AddProductStore';
export class OwnerStoreView extends React.Component {
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
        <h1> Store1 </h1>
        <br/>
        <br/>
        <AddProductStore />
        <br/>
        <br/>
      </div>

    );
  }
}
