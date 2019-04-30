import React from 'react';

const Wrapper = ({ id, cls,children }) => {
  return <div id={id} className={cls}>{children}</div>;
};

export default Wrapper;
