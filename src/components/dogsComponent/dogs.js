import React from 'react';

import Header from '../headerComponent/header';
import './dogs.css';
import PetsList from './PetsList'

export default class Dogs extends React.Component {
    constructor(props){
      super(props);
      let isUser;
    }


    render() {

        if(localStorage.getItem("isSupplier") === "false"){
          this.isUser = true;
        }
        return (
            <React.Fragment>

                <div className="general">
                    <div className="row">
                        <Header />
                    </div>
                    <br/>

                    <div className="botonStyle" >
                        <a href="/addpet">
                            {this.isUser && (<button id="color" className={"btn btn-outline btn-light btn-block "}>Interested in giving in adoption</button>)}
                        </a>
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
