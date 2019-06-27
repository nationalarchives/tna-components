import React from 'react';
import PropTypes from 'prop-types';

const ModalWrapper = props => {
  const {id, role, ariaModal, className, onClick, children} = props;
  return (
    <div id={id} role={role} aria-modal={ariaModal}>
      <div className={className} onClick={onClick}>
        {children}
      </div>
    </div>
  );
};

ModalWrapper.defaultProps = {
  role: 'dialog',
  id: 'tnaModalComponent',
  ariaModal: true,
  className: 'modal fadeIn'
};

ModalWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  ariaModal: PropTypes.bool.isRequired,
  role:PropTypes.string
};

export default ModalWrapper;
