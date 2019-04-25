import React from 'react';

const Link = ({ children, url }) => {
  return <a href={url}>{children}</a>;
};

export default Link;
