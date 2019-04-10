import React from 'react';

const Select = props => {
  return (
    <React.Fragment>
      <label htmlFor={props.for}>{props.children}</label>
      <select>
        {props.option.map((item, i) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default Select;
