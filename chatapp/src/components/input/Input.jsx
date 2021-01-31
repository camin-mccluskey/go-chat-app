import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, IconButton, makeStyles } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});


export const Input = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const sendMessage = (message) => {
    setMessage('');
    onSend(message)
  } 

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <TextField
        value={message}
        id="standard-full-width"
        style={{ margin: 8 }}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => setMessage(e.target.value)}
        // captures enter key message submit
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            sendMessage(message)
          }
        }}
      />
      <IconButton onClick={() => sendMessage(message)} color="secondary" aria-label="send message">
        <SendIcon />
      </IconButton>
    </div>
  );
}


Input.propTypes = {
  /**
   * Callback to execute when send message button is pressed
   */
  onSend: PropTypes.func,
};

Input.defaultProps = {
  onSend: undefined
};
