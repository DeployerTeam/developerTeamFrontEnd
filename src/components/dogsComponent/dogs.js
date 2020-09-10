import React from 'react';

import Header from '../headerComponent/header';
import './dogs.css';
import PetsList from './PetsList'

export default class Dogs extends React.Component {



    render() {
        return (
            <React.Fragment>
                
                <div className="general">
                    <div className="row">
                        <Header />
                    </div>
                    <br/>

                    <div className="botonStyle" >
                        <a href="/main">
                            <button id="color" className={"btn btn-outline btn-light btn-block "}>Interested in giving in adoption</button>
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
