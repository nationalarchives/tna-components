import React from 'react';

const FieldsetWrapper = ({ ariaExpanded, children }) => (
  <fieldset aria-expanded={ariaExpanded}>{children}</fieldset>
);

export default FieldsetWrapper;
