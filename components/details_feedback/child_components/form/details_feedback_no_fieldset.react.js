import React, { Component } from 'react';
//import FeedbackButton from "../button/details_feedback_widget_button.react";

const NoFieldset = ({ displayFieldSet }) => {
  return (
    <React.Fragment>
      {displayFieldSet && (
        <fieldset id="no-fieldset">
          <legend>We'd like to hear from you</legend>
          <label for="explore-comments">
            Your feedback helps us improve our services. Please share any
            comments below.
          </label>
          <input type="text" id="no-comments" />
          <p>Please do not include personal contact details.</p>
        </fieldset>
      )}
    </React.Fragment>
  );
};

export default NoFieldset;
