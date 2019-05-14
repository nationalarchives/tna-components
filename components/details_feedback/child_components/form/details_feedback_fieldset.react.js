import React, { Component } from 'react';
import FeedbackButton from '../button/details_feedback_widget_button.react';

class InitialFieldset extends Component {
  render() {
    return (
      <React.Fragment>
        <fieldset id="InitalFieldset">
          <legend>Could this page be improved?</legend>
          <FeedbackButton type="button" name="no" title="No" />
          <FeedbackButton type="button" name="yes" title="Yes" />
        </fieldset>
      </React.Fragment>
    );
  }
}

export default InitialFieldset;
