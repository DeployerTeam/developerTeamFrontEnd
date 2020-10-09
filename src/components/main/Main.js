import React from 'react';
import Header from '../headerComponent/header';
import './main.css';
import Footer from '../footerComponent/Footer';
import Dashboard from '../formularioPreferencias/dashboard';

export default class Main extends React.Component{

    constructor(props){
      super(props);
      let isUser;
      let isSupplier;
    }



    render(){
        
        return (
            <React.Fragment>
                <div className="container main">
                    <div className="row">
                        <Header/>
                    </div>

                    <div className="preferencias">
                        <Dashboard/>
                    </div>

                    <div className="row body">
                        <a className="col-12 col-md-4 sect ml-2 mr-5" href="/adoption"><div >
                            <h1>ADOPTION</h1>
                        </div></a>
                        <a className="col-12 col-md-4 sect" href="/alliances"><div>
                            <h1>ALLIANCES</h1>
                        </div></a>
                    </div>

                    <div className="row">
                        <Footer/>
                    </div>
                </div>
            </React.Fragment>

        );
    }


}
