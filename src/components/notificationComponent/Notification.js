import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './Notification.css';
import {API_BASE_URL_BACK} from '../../constants/index';
import axios from 'axios';
import Header from '../headerComponent/header'
import { Link } from 'react-router-dom';

export default class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [{}]
    }
    this.getNotifications = this.getNotifications.bind(this);
  }

  componentDidMount(){
    this.getNotifications();
  }

  getNotifications(){
    let bonos = axios.get(API_BASE_URL_BACK + '/bono/mybonos?user=' + localStorage.getItem("localEmail"))
    .then( bonos => {
      this.setState({notifications : bonos.data})
      console.log(this.state.notifications);
    })
  }

  copyToClipboard(bono){
    var aux = document.createElement("input");

  // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute("value", bono.code);
    document.body.appendChild(aux);

  // Selecciona el contenido del campo
    aux.select();

  // Copia el texto seleccionado
    document.execCommand("copy");

  // Elimina el campo de la página
    document.body.removeChild(aux);


  }


  render(){
    return(
        <div>
        <div className="row">
                <Header />
        </div>
            <div className="container1">
                <h1>Mis Bonos
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bookmark-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                    <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                  </svg>
                </h1>
                <List>
                    {this.state.notifications.map((bono) => {

                        return(
                            <ListItem>
                                <ListItemText >
                                    {"Identificador: "+ bono.id + " "}
                                    {"Codigo: "+ bono.code + " "}
                                    {"Estado:" + bono.redeemed}
                                    <a className="boton btn btn-success" href="/alliances">Redimir</a>
                                </ListItemText>
                            </ListItem>
                        )
                    })}
                </List>
            </div>

        </div>

    );
}
}
