import React from 'react';

const FieldsetCheckbox = props => {
  const { legendText } = props;
  return (
    <React.Fragment>
      <legend>{legendText}</legend>
    </React.Fragment>
  );
};

export default FieldsetCheckbox;
