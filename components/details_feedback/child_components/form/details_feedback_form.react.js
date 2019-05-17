import React, { Component } from 'react';
import Fieldset from '../fieldset/details_feedback_fieldset.react';
import Button from '../button/details_feedback_widget_button.react';
import Checkbox from '../checkbox/details_feedback_widget_checkbox.react';
import Comment from '../comment/details_feedback_comment.react';

class DetailsFeedbackForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialQuestion: true,
      noFieldsetDisplay: false,
      yesFieldsetDisplay: false
    };

    this.showNoFieldset = this.showNoFieldset.bind(this);
    this.closeNoFieldset = this.closeNoFieldset.bind(this);

    this.showYesFieldset = this.showYesFieldset.bind(this);
    this.closeYesFieldset = this.closeYesFieldset.bind(this);
  }

  cancelObj() {
    return {
      event: 'DiscoveryFeedback',
      eventCategory: 'DiscoveryFeedback',
      eventAction: 'Cancel',
      eventLabel: 'Cancel feedback'
    };
  }

  showNoFieldset() {
    this.setState({ initialQuestion: false });
    this.setState({ noFieldsetDisplay: true });
  }

  closeNoFieldset(e) {
    e.prventDefault;
    this.setState({ initialQuestion: true });
    this.setState({ noFieldsetDisplay: false });
    console.log(this.cancelObj());
  }

  showYesFieldset() {
    this.setState({ initialQuestion: false });
    this.setState({ yesFieldsetDisplay: true });
  }

  closeYesFieldset(e) {
    e.prventDefault;
    this.setState({ initialQuestion: true });
    this.setState({ yesFieldsetDisplay: false });
    console.log(this.cancelObj());
  }

  render() {
    return (
      <div>
        <form>
          {this.state.initialQuestion && (
            <Fieldset
              legendText="Could this page be improved?"
              className="initail-question">
              <Button
                buttonText="No"
                onClick={this.showNoFieldset}
                type="button"
              />
              <Button
                buttonText="Yes"
                onClick={this.showYesFieldset}
                type="button"
              />
            </Fieldset>
          )}

          {this.state.noFieldsetDisplay && (
            <Fieldset
              legendText="We'd like to hear from you"
              className="noMarginLeft fadeIn">
              <Comment
                id="comment-for-satisfaction"
                commentText="Your feedback helps us improve our services. Please share any comments below."
                commentWarning="Please do not include personal contact details."
              />
              <Button buttonText="Send" type="submit" />
              <Button
                buttonText="Cancel"
                type="reset"
                onClick={this.closeNoFieldset}
              />
            </Fieldset>
          )}
          {this.state.yesFieldsetDisplay && (
            <Fieldset
              legendText="Please let us know why you are dissatisfied"
              className="fadeIn">
              <Checkbox
                id="did-not-understand"
                labelText="I did not understand the information on the page"
              />
              <Checkbox
                id="too-much-information"
                labelText="There was too much information on the page"
              />
              <Checkbox
                id="expected-the-record"
                labelText="I expected to see the record itself, not just a description"
              />
              <Checkbox
                id="access-the-record"
                labelText="I did not understand how to access the record"
              />
              <Checkbox
                id="did-not-know-was-tna"
                labelText="I did not realise I was looking at The National Archives' UK website"
              />
              <Checkbox
                id="not-enough-information"
                labelText="There was not enough information"
              />
              <Checkbox id="other" labelText="Other" />
              <Comment
                id="comment-for-dissatisfaction"
                commentText="Your feedback helps us improve our services. Please share any comments below."
                commentWarning="Please do not include personal contact details."
              />
              <Button buttonText="Send" type="submit" />
              <Button
                buttonText="Cancel"
                type="reset"
                onClick={this.closeYesFieldset}
              />
            </Fieldset>
          )}
        </form>
      </div>
    );
  }
}

export default DetailsFeedbackForm;
