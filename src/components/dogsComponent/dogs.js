import React from 'react';

import Header from '../headerComponent/header';
import './dogs.css';

export default class Dogs extends React.Component {



    render() {
        return (
            <React.Fragment>
                <div style={{height: + window.screen.height}} className="container">
                    <br/>
                    <br/>
                    <br/>
                    <div className="row header">
                        <Header />
                    </div>

                    <div className="botonStyle" >
                        <a href="/main">
                            <button id="color" className={"btn btn-outline btn-light btn-block "}>Interested in giving in adoption</button>
                        </a>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="row body wrapper">
                        <div className="card menuCard">
                            <img className="card-img-top" src="https://perritos882.files.wordpress.com/2016/12/cropped-imagenes-de-perritos-11.jpg" alt="Card image" height="185px"/>
                            <div className="card-body">
                                <h4 className="card-title">Luke</h4>
                                <a href="/dogProfile" className="btn btn-warning">See Profile</a>
                            </div>
                        </div>

                        <div className="card menuCard">
                            <img className="card-img-top" src="https://pm1.narvii.com/7034/1130dd3ce1ed3bcaa2cf2dd16921dbd2e6664efdr1-720-287v2_uhq.jpg" alt="Card image" height="185px"></img>
                            <div className="card-body">
                                <h4 className="card-title">Rex</h4>
                                <a href="/dogProfile" className="btn btn-warning">See Profile</a>
                            </div>
                        </div>

                        <div className="card menuCard">
                            <img className="card-img-top" src="https://www.petdarling.com/articulos/wp-content/uploads/2014/10/perritos-aprenden-primera-vez-video.png?width=1200&enable=upscale" alt="Card image" height="185px"></img>
                            <div className="card-body">
                                <h4 className="card-title">Haku</h4>
                                <a href="/dogProfile" className="btn btn-warning">See Profile</a>
                            </div>
                        </div>

                        <div className="card menuCard">
                            <img className="card-img-top" src="https://sumedico.blob.core.windows.net.optimalcdn.com/images/2020/05/13/cuidadosperrosschnauzer-focus-min0.03-0.46-983-557.jpg" alt="Card image" height="185px"></img>
                            <div className="card-body">
                                <h4 className="card-title">Bolt</h4>
                                <a href="/dogProfile" className="btn btn-warning">See Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
