import React from 'react';

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

export default Button;
