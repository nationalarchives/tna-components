import React from 'react';
import PropTypes from 'prop-types';

const ModalContent = props => {
  const {children, modalContentClass, modalBodyClass} = props;
  return (
    <div className={modalContentClass}>
      <div className={modalBodyClass}>{children}</div>
    </div>
  );
};

ModalContent.defaultProps = {
  modalContentClass: 'modal-content',
  modalBodyClass: 'modal-body'
};

ModalContent.propTypes = {
  children: PropTypes.node.isRequired,
  modalContentClass: PropTypes.string,
  modalBodyClass: PropTypes.string
};

export default ModalContent;
