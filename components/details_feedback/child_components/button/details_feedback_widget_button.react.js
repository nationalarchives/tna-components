import React from 'react';

const FieldsetButton = props => {
  const { buttonText, onClick } = props;
  return (
    <React.Fragment>
      <button type="button" onClick={onClick}>
        {buttonText}
      </button>
    </React.Fragment>
  );
};

export default FieldsetButton;
