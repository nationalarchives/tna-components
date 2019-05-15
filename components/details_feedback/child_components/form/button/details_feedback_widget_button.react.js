import React, { Component } from 'react';

class FieldsetButton extends Component {
  render() {
    return (
      <React.Fragment>
        <button type="button" onClick={this.props.clickEvent}>
          {this.props.buttonText}
        </button>
      </React.Fragment>
    );
  }
}

export default FieldsetButton;
