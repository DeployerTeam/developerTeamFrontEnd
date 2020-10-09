import React from 'react';

import Header from '../headerComponent/header';
import './dogs.css';
import PetsList from './PetsList'

export default class Dogs extends React.Component {
    constructor(props){
      super(props);
      let isUser;
      let isSupplier;

    }


    render() {

        if(localStorage.getItem("isSupplier") === "false"){
          this.isUser = true;
        }else if(localStorage.getItem("isSupplier") === true){
          this.isSupplier = true;
        }
        return (
            <React.Fragment>

                <div className="general">
                    <div className="row">
                        <Header />
                    </div>
                    <br/>

                    <div className="botonStyle" >

                            {this.isUser && (<a id="color" href="/addpet" className={"btn btn-outline btn-light btn-block "}>Interesado en dar en adopción</a>)}


                            {!this.isUser && !this.isSupplier && (<a id="color" href="/signin" className={"btn btn-outline btn-light btn-block "}>Interesado en dar en adopción</a>)}
                          



                    </div>
                    <br/>
                    <br/>
                    <div className="pets">
                      <PetsList />
                    </div>
                </div>
            </React.Fragment>

        );
    }

}
