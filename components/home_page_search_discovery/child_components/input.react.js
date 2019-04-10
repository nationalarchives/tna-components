import React from 'react';

const Input = props => {
  return (
    <React.Fragment>
      <label className={props.labelClass} htmlFor={props.for}>
        {props.children}
      </label>
      <input
        id={props.id}
        aria-required={props.aria}
        placeholder={props.placeholder}
        name={props.name}
        type={props.type}
        required={props.required}
        class={props.inputClass}
      />
    </React.Fragment>
  );
};

export default Input;
