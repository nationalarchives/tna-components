import React from 'react';

const ModalFooter = props => {
  const {children} = props;
  return (
    <div className="modal-footer" id="modal-footer">
      {children}
    </div>
  );
};

export default ModalFooter;
