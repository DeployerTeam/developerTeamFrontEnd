import React, {Component} from 'react';
import './header.css';
import PrimarySearchAppBar from './NavBar.js';

export default class Header extends Component {

    constructor(props){
      super(props);
      this.state = {
        modal: false
      }
      this.abrirModal = this.abrirModal.bind(this);

    }

    abrirModal(){
      if(!this.state.modal){
        this.setState({
          modal: true
        })
      }
    }


    render() {

        return (
            <React.Fragment>
                <PrimarySearchAppBar props={this.props} />
                <div className="container-fluid">
                  <div className="root">
                  </div>
                </div>
            </React.Fragment>

        );
    }

}
