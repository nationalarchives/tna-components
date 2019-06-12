import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const { id, labelText, onClick, autoFocus } = this.props;
    return (
      <div className="checkbox">
        <input
          type="checkbox"
          id={id}
          value={id}
          onClick={onClick}
          autoFocus={autoFocus}
        />
        <label for={id}>{labelText}</label>
      </div>
    );
  }
  static propTypes = {
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    onClick: PropTypes.func
  };
}

Checkbox.defaultProps = {
  onClick: null
};

export default Checkbox;
