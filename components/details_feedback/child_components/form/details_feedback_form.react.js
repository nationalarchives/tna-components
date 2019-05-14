import React, { Component } from 'react';
import FieldsetWrapper from './fieldset/details_feedback_fieldset.react';
import FieldsetButton from './button/details_feedback_widget_button.react';
import FieldsetLegend from './legend/details_feedback_legend.react';

class DetailsFeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noFieldsetDisplay: true,
      yesFieldsetDisplay: false
    };
  }
  render() {
    return (
      <form action="">
        <FieldsetWrapper>
          <FieldsetLegend legendText="Could this page be improved" />
          <FieldsetButton buttonText="No" />
          <FieldsetButton buttonText="Yes" />
        </FieldsetWrapper>

        {this.state.noFieldsetDisplay && (
          <FieldsetWrapper ariaExpanded={this.state.noFieldsetDisplay}>
            <FieldsetLegend legendText="We'd like to hear from you" />
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
            <FieldsetLegend legendText="Please let us know why you are dissatisfied" />
          </FieldsetWrapper>
        )}
      </form>
    );
  }
}

export default DetailsFeedbackForm;
