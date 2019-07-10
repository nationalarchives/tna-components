import React from 'react';
import PropTypes from 'prop-types';

const ModalHeader = props => {
  const {
    onClick,
    onKeyPress,
    children,
    autoFocus,
    ref,
    className,
    ariaLabel
  } = props;
  return (
    <div className="modal-header" id="modal-header">
      <button
        aria-label={ariaLabel}
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
  autoFocus: null,
  ariaLabel: null
};

ModalHeader.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default ModalHeader;
