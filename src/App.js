import React from 'react';
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button, } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  Paper: {
    width: 400,
    margin: '0 auto',
    marginTop: 50,
    textAlign: 'center',
    padding: 15
  },
  input: {
    width: '95%',
    marginBottom: 10
  }
}));

function App() {

  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Navbar />
      <Paper elevation={3} className={classes.Paper}>
        <h1>Login</h1>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="Enter Email" className={classes.input} />
          <TextField label="Enter Password" className={classes.input} />
          <Button variant="contained" color="primary"className={classes.input}>
            Login
          </Button>
        </form>



      </Paper>
    </div >

  );
}

export default App; 
