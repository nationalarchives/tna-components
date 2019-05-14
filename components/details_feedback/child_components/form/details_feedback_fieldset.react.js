import React, { Component } from 'react';
import FeedbackButton from '../button/details_feedback_widget_button.react';

class InitialFieldset extends Component {
  render() {
    return (
      <React.Fragment>
        <fieldset id="InitalFieldset">
          <legend>Could this page be improved?</legend>
          <FeedbackButton buttonText="No" />
          <FeedbackButton buttonText="Yes" />
        </fieldset>
      </React.Fragment>
    );
  }
}

export default InitialFieldset;
