import React from 'react';

const Fieldset = ({ children, legendText, className }) => (
  <fieldset className={className}>
    <legend>{legendText}</legend>
    {children}
  </fieldset>
);

export default Fieldset;
