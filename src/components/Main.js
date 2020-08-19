import React from 'react';

import './main.css';

export default class Main extends React.Component{



    render(){
        return (
            <React.Fragment>
                <div style={{height: + window.screen.height}} className="container main">
                    
                    <div className="row header">
                        <div className="col-12 col-md-3">
                            <img src="https://www.businesstimes.com.sg/sites/default/files/styles/680x453/public/image/2020/01/11/BT_20200111_PG1BRUNCHREVISE_4002715-1.jpg?itok=stIHxRYg"
                            className = "img-thumbnail rounded-circle " />
                        </div>
                        <div className="col-12 col-md-9">
                            <ul className="float-right nav">
                                <li className="nav-item"><a href="/">Home</a></li>
                                <li className="nav-item"><a href="/signIn">SignIn</a></li>
                                <li className="nav-item"><a href="/signUp">SignUp</a></li>
                            </ul>
                        </div>
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