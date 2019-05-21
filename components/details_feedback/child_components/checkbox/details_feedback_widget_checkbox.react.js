import React from 'react';

const Checkbox = props => {
  const { id, labelText, onClick } = props;
  return (
    <div className="checkbox">
      <input type="checkbox" id={id} value={id} onClick={onClick} />
      <label for={id}>{labelText}</label>
    </div>
  );
};

Checkbox.defaultProps = {
  id: null,
  labelText: null
};

export default Checkbox;
