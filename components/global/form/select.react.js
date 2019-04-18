import React from 'react';

const Select = ({ htmlFor, children, id, className, option, name }) => {
  return (
    <React.Fragment>
      <label htmlFor={htmlFor}>{children}</label>
      <select id={id} className={className} name={name}>
        {option.map(item => (
          <option key={item.id} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default Select;
