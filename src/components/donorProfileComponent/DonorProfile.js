import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { AccordionActions } from '@material-ui/core';

export default class DonorProfile extends Component{
    constructor(props){
        super(props);
        this.state = {
            open : false
        }
        this.setOpen = this.setOpen.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClickClose = this.handleClickClose.bind(this);
    
    }

    setOpen(action){
        console.log(action)
        this.setState({
            open: action
          }, () => {
            console.log("Open: ", this.state);
          });
    }

    handleClickOpen(){
        this.setOpen(true);
    }

    handleClickClose(){
        this.setOpen(false);
    }

    render(){
        return(
            <List dense >
            {[0, 1, 2, 3].map((value) => {
              const labelId = `checkbox-list-secondary-label-${value}`;
              return (
                <ListItem key={value} button>
                    <div>
                        <Dialog
                            fullScreen
                            open={this.state.open}
                            onClose={this.handleClickClose}
                        >
                            <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Let Google help apps determine location. This means sending anonymous location data to Google, even when no
                                    apps are running.
                                </DialogContentText>
                            </DialogContent>
                            <Button autoFocus onClick={this.handleClickClose} color="primary">
                                Marcar como leido
                            </Button>
                        </Dialog>
                    </div>
                  <ListItemAvatar>
                    <Avatar
                      alt={`Avatar n°${value + 1}`}
                      src={`https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png`}
                    />
                  </ListItemAvatar>
                  <ListItemText id={labelId} primary={`Application for adoption  ${value + 1}`} />
                  <Button autoFocus onClick={this.handleClickOpen} color="primary">
                        Evaluar
                  </Button>
                </ListItem>
              );
            })}
            </List>
        );
    }
}