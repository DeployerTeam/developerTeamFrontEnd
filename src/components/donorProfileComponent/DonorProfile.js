import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Header from '../headerComponent/header'
import './DonorProfile.css';

import { AdoptionRequest } from './AdoptionRequest';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

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

            <div className="container-fluid">

                <div className="row">
                        <Header />
                </div>
                <br/>
                <h1 className="my-5 text-white text-center">Request for adoption</h1>
                <List dense className="container-donor " style={{"margin-top":"2%"}}>
                {[0, 1, 2, 3].map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                        <ListItem key={value} className="donor">
                            <div>
                                <Dialog
                                    fullScreen
                                    open={this.state.open}
                                    onClose={this.handleClickClose}
                                    TransitionComponent={Transition}
                                >

                                <AppBar >
                                        <Toolbar>
                                            <IconButton edge="start" color="inherit" onClick={this.handleClickClose} aria-label="close">
                                                <CloseIcon />
                                            </IconButton>
                                        <Typography variant="h6">
                                            Application for adoption {value}
                                        </Typography>

                                    </Toolbar>
                                </AppBar>



                                    <DialogContent>
                                        <AdoptionRequest id={value}/>  {/* Una vez se utilice el back se usara el id de la solicitud para extraer los datos */}
                                        <Button autoFocus onClick={this.handleClickClose} color="primary">
                                            Check as read
                                        </Button>
                                    </DialogContent>


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
            </div>
        );
    }
}
