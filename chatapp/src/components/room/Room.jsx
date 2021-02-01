import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';


const useStyles = makeStyles({
  container: {
    backgroundColor: "gray",
    paddingLeft: "5px"
  }
});

export const Room = ({title, description}) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.container}>
      <Grid xs={6}>
        <Typography variant="h5">{title}</Typography>
      </Grid>
      <Grid xs={6}>
        <Typography variant="subtitle2">{description}</Typography>
      </Grid>
    </Grid>
  );
};


Room.propTypes = {
  /**
   * Name of the room
   */
  title: PropTypes.string,
  /**
   * Description of the room
   */
  description: PropTypes.string,
};

Room.defaultProps = {
  title: "Example room",
  description: "Example description of room"
};
