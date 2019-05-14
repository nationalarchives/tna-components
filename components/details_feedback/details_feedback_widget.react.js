import React, { Component } from 'react';

import DetailsFeedbackForm from './child_components/form/details_feedback_form.react';

import './style.scss';

class DetailsFeedbackWidget extends Component {
  render() {
    return (
      <div className="details-feedback-widget">
        <h2>Feedback</h2>
        <DetailsFeedbackForm />
      </div>
    );
  }
}
export default DetailsFeedbackWidget;
