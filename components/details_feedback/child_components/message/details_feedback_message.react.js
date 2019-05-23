import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message, className }) => (
  <p className={className}>{message}</p>
);

Message.defaultProps = {
  className: null
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Message;
