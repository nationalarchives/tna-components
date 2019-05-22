import React from 'react';
import PropTypes from 'prop-types';

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

Fieldset.propTypes = {
  legendText: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Fieldset;
