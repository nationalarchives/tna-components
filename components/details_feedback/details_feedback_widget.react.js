import React from 'react';

import DetailsFeedbackForm from './child_components/form/details_feedback_form/details_feedback_form.react';

import './style.scss';

const DetailsFeedbackWidget = () => {
  return (
    <React.Fragment>
      <h2>Feedback</h2>
      <DetailsFeedbackForm />
    </React.Fragment>
  );
};
export default DetailsFeedbackWidget;
