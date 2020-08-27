import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './header.css';
import Model from '../profile/Model'
import Avatar from '@material-ui/core/Avatar'


export default class Header extends Component {

    constructor(props){
      super(props);

      this.abrirPerfil = this.abrirPerfil.bind(this);
    }

    abrirPerfil(){
      return(
        <div>

        <h1>hdsad</h1>
        <Model />
        </div>
      )
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                  <div className="root">
                  <AppBar position="fixed">
                    <Toolbar>
                      <IconButton edge="start" href="/profile" className="menuButton" color="black" aria-label="menu">
                        <MenuIcon />
                      </IconButton>
                      <Typography  variant="h3" className="title">
                          Appet
                      </Typography>
                      <Button href="/signIn" color="black">Login</Button>
                      <Button href="/signUp" color="black">Register</Button>                      
                      <Button  color="black"  href="/profile">Profile</Button>
                    </Toolbar>
                  </AppBar>

                  </div>
                </div>
            </React.Fragment>

        );
    }

}
