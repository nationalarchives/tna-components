import React, { Component } from 'react';
import Fieldset from '../form/details_feedback_fieldset.react';

class DetailsFeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayFieldSet: false
    };
  }
  render() {
    return (
      <React.Fragment>
        <form action="" id="discovery-feedback-form">
          <Fieldset />
          <NoFieldset {...this.state} />
        </form>
      </React.Fragment>
    );
  }
}

export default DetailsFeedbackForm;
