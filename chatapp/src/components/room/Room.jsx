import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import colors from '../../assets/colors';


const useStyles = makeStyles({
  container: {
    backgroundColor: colors.SECONDARY,
    borderRadius: 10,
    opacity: "90%",
    color: colors.BLACK,
    width: "340px"
  },
  helper: {
    borderWidth: 1,
    borderColor: "red",
    borderStyle: "solid"
  }
});

export const Room = ({title, description}) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={1}/>
      <Grid container item xs={10} direction="column">
        <Grid container item xs={12}>
          <Grid item xs={9}>
            {title}
          </Grid>
          <Grid item xs={3}>
            profile pictures
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {description}
        </Grid>
      </Grid>
      <Grid item xs={1}/>
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
