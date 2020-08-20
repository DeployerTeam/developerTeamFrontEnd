import React, {Component} from 'react';

import './header.css';

export default class Header extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div className="col-12 col-md-3">

                </div>
                <div className="col-12 col-md-9">
                    <center>
                        <div className="btnLogin">
                            <a href="/signUp">
                                <button className={"btn btn-outline btn-light btn-block "}>SignUp</button>
                            </a>
                        </div>
                        <div className="btnLogin">
                            <a href="/signIn">
                                <button className={"btn btn-outline btn-light btn-block "}>SignIn</button>
                            </a>
                        </div> 
                    </center>
                </div>
            </React.Fragment>
                
        );
    }

}