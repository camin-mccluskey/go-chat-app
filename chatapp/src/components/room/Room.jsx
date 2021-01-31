import React from 'react';
import PropTypes from 'prop-types';
import './room.css';

export const Room = ({title, description}) => {
  return (
    <div className='Room_Container'>
      <p className='Room_Title'>{title}</p>
      <p className='Room_Description'>{description}</p>
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
