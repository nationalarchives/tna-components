import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const { id, labelText, onClick } = this.props;
    return (
      <div className="checkbox">
        <input type="checkbox" id={id} value={id} onClick={onClick} />
        <label for={id}>{labelText}</label>
      </div>
    );
  }
}

Checkbox.defaultProps = {
  id: null,
  labelText: null
};

Checkbox.propTypes = {
  id: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Checkbox;
