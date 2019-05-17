import React from 'react';

const Fieldset = ({ children, legendText, className }) => (
  <fieldset className={className}>
    <legend>{legendText}</legend>
    {children}
  </fieldset>
);

Fieldset.defaultProps = {
  legendText: null,
  className: null
};

export default Fieldset;
