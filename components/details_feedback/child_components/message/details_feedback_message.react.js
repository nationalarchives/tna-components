import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message, className }) => (
  <p className={className}>{message}</p>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Message;
