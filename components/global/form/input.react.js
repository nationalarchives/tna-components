import React from 'react';

const Input = React.forwardRef(
  (
    {
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
    },
    ref
  ) => {
    return (
      <React.Fragment>
        {type !== 'hidden' ? (
          <label className={labelClass} htmlFor={htmlfor}>
            {children}
          </label>
        ) : null}

        <input
          id={id}
          aria-required={aria}
          placeholder={placeholder}
          name={name}
          type={type}
          title={title}
          required={required}
          className={inputClass}
          value={val}
          ref={ref}
          onChange={onChange}
          onKeyUp={onKeyUp}
        />
      </React.Fragment>
    );
  }
);

export default Input;
