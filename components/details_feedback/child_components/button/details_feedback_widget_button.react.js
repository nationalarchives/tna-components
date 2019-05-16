import React from 'react';

const Button = props => {
  const { buttonText, onClick } = props;
  return (
    <React.Fragment>
      <button type="button" onClick={onClick}>
        {buttonText}
      </button>
    </React.Fragment>
  );
};

export default Button;
