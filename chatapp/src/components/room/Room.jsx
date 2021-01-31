import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    backgroundColor: "gray",
    paddingLeft: "5px"
  }, 
  title: {
    fontSize: "large"
  }, 
  subtitle: {
    fontSize: "small"
  }
});

export const Room = ({title, description}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p className={classes.title}>{title}</p>
      <p className={classes.subtitle}>{description}</p>
    </div>
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
