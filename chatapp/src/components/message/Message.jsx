import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
  container: {
    display: "flex",
    maxWidth: "45%",
    paddingLeft: "5px",
    margin: "5px",
    background: (fromUser) => fromUser ? "blue" : "white"
  }
}));

export const Message = ({ content, fromUser }) => {
  const classes = useStyles(fromUser);
  return (
    <Paper className={classes.container} elevation={3}>
      <p className="Message_Content">
        {content} 
      </p>
    </Paper>
  )
}

Message.propTypes = {
  /**
   * Content of message
   */
  content: PropTypes.string,
  /**
   * Is this message sent by the user?
   */
  fromUser: PropTypes.bool
};

Message.defaultProps = {
  content: "Example message :)",
  fromUser: false
};