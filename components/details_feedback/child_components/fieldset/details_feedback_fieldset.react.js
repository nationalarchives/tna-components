import React from 'react';
import PropTypes from 'prop-types';

const Fieldset = ({ children, legendText, className, id }) => (
  <fieldset className={className} id={id}>
    <legend>{legendText}</legend>
    {children}
  </fieldset>
);

Fieldset.defaultProps = {
  legendText: null,
  className: null,
  id: null
};

Fieldset.propTypes = {
  legendText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string
};

export default Fieldset;
