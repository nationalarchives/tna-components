import React, { Component } from 'react';
import FieldsetWrapper from '../fieldset/details_feedback_fieldset.react';
import FieldsetButton from '../button/details_feedback_widget_button.react';
import FieldsetLegend from '../legend/details_feedback_legend.react';
import FieldsetCheckbox from '../checkbox/details_feedback_widget_checkbox.react';
import FieldsetComment from '../comment/details_feedback_comment.react';

class DetailsFeedbackForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialQuestion: true,
      noFieldsetDisplay: false,
      yesFieldsetDisplay: false
    };

    this.showNoFieldset = this.showNoFieldset.bind(this);
    this.showYesFieldset = this.showYesFieldset.bind(this);
  }

  showNoFieldset() {
    this.setState({ initialQuestion: false });
    this.setState({ noFieldsetDisplay: true });
  }

  showYesFieldset() {
    this.setState({ initialQuestion: false });
    this.setState({ yesFieldsetDisplay: true });
  }

  render() {
    return (
      <form>
        {this.state.initialQuestion && (
          <FieldsetWrapper ariaExpanded={this.state.initialQuestion}>
            <FieldsetLegend legendText="Could this page be improved" />
            <FieldsetButton buttonText="No" onClick={this.showNoFieldset} />
            <FieldsetButton buttonText="Yes" onClick={this.showYesFieldset} />
          </FieldsetWrapper>
        )}

        {this.state.noFieldsetDisplay && (
          <FieldsetWrapper ariaExpanded={this.state.noFieldsetDisplay}>
            <FieldsetLegend legendText="We'd like to hear from you" />
            <FieldsetComment
              id="comment-for-satisfaction"
              commentText="Your feedback helps us improve our services. Please share any comments below."
            />
          </FieldsetWrapper>
        )}
        {this.state.yesFieldsetDisplay && (
          <FieldsetWrapper ariaExpanded={this.state.noFieldsetDisplay}>
            <FieldsetLegend legendText="Please let us know why you are dissatisfied" />
            <FieldsetCheckbox
              id="did-not-understand"
              labelText="I did not understand the information on the page"
            />
            <FieldsetCheckbox
              id="too-much-information"
              labelText="There was too much information on the page"
            />
            <FieldsetCheckbox
              id="expected-the-record"
              labelText="I expected to see the record itself, not just a description"
            />
            <FieldsetCheckbox
              id="access-the-record"
              labelText="I did not understand how to access the record"
            />
            <FieldsetCheckbox
              id="did-not-know-was-tna"
              labelText="I did not realise I was looking at The National Archives' UK website"
            />
            <FieldsetCheckbox
              id="not-enough-information"
              labelText="There was not enough information"
            />
            <FieldsetCheckbox id="other" labelText="Other" />
            <FieldsetComment
              id="comment-for-dissatisfaction"
              commentText="Your feedback helps us improve our services. Please share any comments below."
            />
          </FieldsetWrapper>
        )}
      </form>
    );
  }
}

export default DetailsFeedbackForm;
