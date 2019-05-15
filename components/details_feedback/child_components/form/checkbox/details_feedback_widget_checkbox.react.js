import React, { Component } from 'react';

const FieldsetCheckbox = props => {
  const { id, labelText } = props;
  return (
    <div className="checkbox">
      <input type="checkbox" id={id} value={id} />
      <label for={id}>{labelText}</label>
    </div>
  );
};

export default FieldsetCheckbox;
