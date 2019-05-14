import React, { Component } from 'react';

class FieldsetLegend extends Component {
  render() {
    return (
      <React.Fragment>
        <legend>{this.props.legendText}</legend>
      </React.Fragment>
    );
  }
}

export default FieldsetLegend;
