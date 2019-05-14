import React, { Component } from 'react';

class FeedbackButton extends Component {
  render() {
    const { title, className } = this.props;
    return (
      <React.Fragment>
        <button className={className} value={title}>
          {title}
        </button>
      </React.Fragment>
    );
  }
}

FeedbackButton.defaultProps = {
  title: 'Enter button title',
  className: null
};

export default FeedbackButton;
