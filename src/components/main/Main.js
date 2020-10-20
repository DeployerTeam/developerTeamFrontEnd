import React from 'react';
import Header from '../headerComponent/header';
import './main.css';
import Footer from '../footerComponent/Footer';


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
                  

                    <div className="row body">
                        <a className="col-12 col-md-4 sect ml-2 mr-5" href="/adoption"><div >
                            <h1>ADOPCIÓN</h1>
                        </div></a>
                        <a className="col-12 col-md-4 sect" href="/alliances"><div>
                            <h1>ALIANZAS</h1>
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
