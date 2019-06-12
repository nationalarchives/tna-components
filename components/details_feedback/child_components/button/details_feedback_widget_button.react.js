import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { buttonText, onClick, type } = props;
  return (
    <React.Fragment>
      <button type={type} onClick={onClick}>
        {buttonText}
      </button>
    </React.Fragment>
  );
};

Button.defaultProps = {
  type: 'button',
  onClick: null,
  buttonText: null
};

Button.propTypes = {
  type: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
