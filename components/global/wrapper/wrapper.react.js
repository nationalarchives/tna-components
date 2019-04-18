import React from 'react';

const Wrapper = ({ id, children }) => {
  return <div id={id}>{children}</div>;
};

export default Wrapper;
