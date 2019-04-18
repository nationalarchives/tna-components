import React from 'react';

const Form = ({ method, action, children, onSubmit }) => {
  return (
    <form method={method} action={action} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
