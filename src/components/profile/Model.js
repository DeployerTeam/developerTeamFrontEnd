import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const nombre= "Daniel Alfonso"
  const correo= "danielalfonso.29@hotmail.com"
  const phone= "3193979145"
  const contraseña = "123"

  return (
    <div>
      <Button onClick={handleOpen}>Ver Perfil </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h1 className="align-middle"> Profile </h1>
            </Grid>

     <Grid item xs={12} sm={6}>
       <img src="logo192.png" style={{width: "50%"}}/>

     </Grid>
     <Grid item xs={12} sm={6}>
     <FormControl margin="normal" fullWidth>
         <InputLabel htmlFor="name">Name</InputLabel>
         <Input id="name" name="name" autoComplete="email" value={nombre} />
     </FormControl>
     <FormControl margin="normal" fullWidth>
         <InputLabel htmlFor="email">Email</InputLabel>
         <Input id="email" name="email" autoComplete="email" value={correo} />
     </FormControl>
     <FormControl margin="normal" fullWidth>
         <InputLabel htmlFor="phone">Phone</InputLabel>
         <Input id="phone" name="phone" value={phone} />
     </FormControl>
     <FormControl margin="normal" required fullWidth>
         <InputLabel htmlFor="password">Password</InputLabel>
         <Input
             name="password"
             type="password"
             id="password"
             autoComplete="current-password"
             value={contraseña}
         />
     </FormControl>
     <Button
         type="submit"
         fullWidth
         variant="contained"
         color="primary"
         className="submit"
     >
         Editar información
     </Button>

     </Grid>

          </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
