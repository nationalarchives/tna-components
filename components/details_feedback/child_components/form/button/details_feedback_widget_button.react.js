import React, { Component } from 'react';

class FeedbackButton extends Component {
  render() {
    return (
      <React.Fragment>
        <button type="button">{this.props.buttonText}</button>
      </React.Fragment>
    );
  }
}

export default FeedbackButton;
