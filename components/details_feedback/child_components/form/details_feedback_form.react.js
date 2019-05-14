import React, { Component } from 'react';
import FieldsetWrapper from './fieldset/details_feedback_fieldset.react';
import FeedbackButton from './button/details_feedback_widget_button.react';

class DetailsFeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noFieldsetDisplay: false,
      yesFieldsetDisplay: false
    };
  }
  render() {
    return (
      <form action="">
        <FieldsetWrapper>
          <legend>Could this page be improved</legend>
          <FeedbackButton buttonText="No" />
          <FeedbackButton buttonText="Yes" />
        </FieldsetWrapper>

        {this.state.noFieldsetDisplay && (
          <FieldsetWrapper ariaExpanded={this.state.noFieldsetDisplay}>
            <legend>We'd like to hear from you</legend>
            <div class="checkbox">
              <label for="explore-comments">
                Your feedback helps us improve our services. Please share any
                comments below.
              </label>
              <input type="text" id="no-comments" />
              <p>Please do not include personal contact details.</p>
            </div>
          </FieldsetWrapper>
        )}
        {this.state.yesFieldsetDisplay && (
          <FieldsetWrapper ariaExpanded={this.state.noFieldsetDisplay}>
            <legend>Yes fieldset</legend>
          </FieldsetWrapper>
        )}
      </form>
    );
  }
}

export default DetailsFeedbackForm;
