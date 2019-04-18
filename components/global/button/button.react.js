import React from 'react';
import './button.scss';

const Button = ({ type, children }) => {
  return <button type={type}>{children}</button>;
};

export default Button;
