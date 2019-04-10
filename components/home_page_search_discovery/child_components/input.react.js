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
        title={props.title}
        required={props.required}
        class={props.inputClass}
        value={props.value}
      />
    </React.Fragment>
  );
};

export default Input;
