import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import './Nav.css';

export const Nav = () => {
  return (
    <div className="Nav_Container">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className="Nav_Title">
            Go Chat App
          </Typography>
          <Button className="Nav_LoginBtn">
            Login
          </Button>
        </Toolbar>
      </AppBar>  
    </div>
  );
}
