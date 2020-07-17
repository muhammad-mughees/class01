import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'lightblue',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  Paper: {
    height: 500,
    width: 400,
    margin: '0 auto',
    textAlign: 'center',
  }
}));

function App() {

  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.Paper}>
        <h1>Login</h1>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="Enter Email" />
          <br />
          <TextField label="Enter Password" />
        </form>



      </Paper>
    </div>

  );
}

export default App; 
