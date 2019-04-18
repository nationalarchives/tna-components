import React from 'react';

const Input = ({
  labelClass,
  htmlfor,
  children,
  id,
  aria,
  placeholder,
  name,
  type,
  title,
  required,
  inputClass,
  val,
  onChange,
  onKeyUp
}) => {
  return (
    <React.Fragment>
      <label className={labelClass} htmlFor={htmlfor}>
        {children}
      </label>
      <input
        id={id}
        aria-required={aria}
        placeholder={placeholder}
        name={name}
        type={type}
        title={title}
        required={required}
        class={inputClass}
        value={val}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
    </React.Fragment>
  );
};

export default Input;
