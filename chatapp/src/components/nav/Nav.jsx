import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: "flex"
  },
  title: {
    flexGrow: 1 
  }
});

export const Nav = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Go Chat App
          </Typography>
          <Button>
            Login
          </Button>
        </Toolbar>
      </AppBar>  
    </div>
  );
}
