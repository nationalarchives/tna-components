import React from 'react';
import PropTypes from 'prop-types';

let imgStyle = {
  maxWidth: '70rem',
  heigth: 'auto'
};

const ModalImage = props => {
  const {src, alt, style, className, tabIndex} = props;
  return (
    <img
      style={style}
      alt={alt}
      src={src}
      className={className}
      tabIndex={tabIndex}
    />
  );
};

ModalImage.defaultProps = {
  style: imgStyle,
  tabIndex: '0',
  className: 'trap'
};

ModalImage.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  tabIndex: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

export default ModalImage;
