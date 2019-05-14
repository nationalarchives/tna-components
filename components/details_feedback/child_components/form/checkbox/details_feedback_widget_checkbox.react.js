import React, { Component } from 'react';

class FieldsetCheckbox extends Component {
  render() {
    const { id, labelText } = this.props;
    return (
      <div className="checkbox">
        <input type="checkbox" id={id} value={id} />
        <label for={id}>{labelText}</label>
      </div>
    );
  }
}

export default FieldsetCheckbox;
