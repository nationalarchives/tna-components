import React from 'react';

const Input = props => {
  return (
    <React.Fragment>
      <label className={props.labelClass} htmlFor={props.for}>
        {props.children}
      </label>
      <input
        aria-required={props.ariaRequired}
        required={props.ariaRequired}
        name={props.name}
        type={props.type}
        id={props.id}
      />
    </React.Fragment>
  );
};

export default Input;
