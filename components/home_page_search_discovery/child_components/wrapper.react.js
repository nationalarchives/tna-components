import React from 'react';

const Wrapper = props => {
  return <div id="held-by-react-component">{props.children}</div>;
};

export default Wrapper;
