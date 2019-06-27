import React from 'react';
import PropTypes from 'prop-types';

const ModalHeader = props => {
  const {onClick, onKeyPress, children, autoFocus, ref, className} = props;
  return (
    <div className="modal-header" id="modal-header">
      <button
        onKeyPress={onKeyPress}
        className={className}
        onClick={onClick}
        autoFocus={autoFocus}
        ref={ref}>
        &times;
      </button>
      {children}
    </div>
  );
};

ModalHeader.defaultProps = {
  onClick: null,
  autoFocus: null
};

ModalHeader.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default ModalHeader;
