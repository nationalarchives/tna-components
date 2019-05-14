import React, { Component } from 'react';

class FeedbackButton extends Component {
  render() {
    const { buttonText } = this.props;
    return (
      <React.Fragment>
        <button>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default FeedbackButton;
