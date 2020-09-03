import React from 'react';

import Header from '../headerComponent/header';

import './main.css';

export default class Main extends React.Component{



    render(){
        return (
            <React.Fragment>
                <div className="container main">
                    <div className="row">
                        <Header/>
                    </div>

                    <div className="row body">
                        <a className="col-12 col-md-4 sect" href="/adoption"><div >
                            <h1>ADOPTION</h1>
                        </div></a>
                        <a className="col-12 col-md-4 sect" href="/store"><div>
                            <h1>STORE</h1>
                        </div></a>
                        <a className="col-12 col-md-4 sect" href="/veterinary"><div>
                            <h1>VETERINARY</h1>
                        </div></a>
                    </div>

                </div>
            </React.Fragment>

        );
    }


}
