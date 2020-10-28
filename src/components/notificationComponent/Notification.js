import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './Notification.css';
import {API_BASE_URL_BACK} from '../../constants/index';
import axios from 'axios';

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
    let bonos = axios.get(API_BASE_URL_BACK + '/bono/getmybonos?user=' + localStorage.getItem("localEmail"))
    .then( bonos => {
      this.setState({notifications : bonos.data})
      console.log(this.state.notifications);
    })
  }


  render(){
    return(
        <div>
            <div className="root">
                <h1>Mis Bonos</h1>
                <List>
                    {this.state.notifications.map((bono) => {

                        return(
                            <ListItem>
                                <ListItemText >
                                    {"Identificador: "+ bono.id + " "}
                                    {"Codigo: "+ bono.code + " "}
                                    {"Estado:" + bono.redeemed}
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
