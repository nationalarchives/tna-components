import React, { Component } from 'react';
import Fieldset from '../fieldset/details_feedback_fieldset.react';
import Button from '../button/details_feedback_widget_button.react';
import Checkbox from '../checkbox/details_feedback_widget_checkbox.react';
import Comment from '../comment/details_feedback_comment.react';
import { Data } from '../../data';

class DetailsFeedbackForm extends Component {
  state = Data;

  cancelObj = () => {
    return {
      event: 'DiscoveryFeedback',
      eventCategory: 'DiscoveryFeedback',
      eventAction: 'Cancel',
      eventLabel: 'Cancel feedback'
    };
  };

  showNoFieldset = () => {
    this.setState({ initialQuestion: false });
    this.setState({ noFieldsetDisplay: true });
  };

  closeNoFieldset = e => {
    e.prventDefault;
    this.setState(state => ({
      initialQuestion: !state.initialQuestion,
      noFieldsetDisplay: !state.noFieldsetDisplay
    }));

    console.log(this.cancelObj());
  };

  showYesFieldset = () => {
    this.setState({ initialQuestion: false });
    this.setState({ yesFieldsetDisplay: true });
  };

  closeYesFieldset = e => {
    e.prventDefault;
    this.setState({ initialQuestion: true });
    this.setState({ yesFieldsetDisplay: false });
    console.log(this.cancelObj());
  };

  render() {
    const {
      initialQuestion,
      noFieldsetDisplay,
      yesFieldsetDisplay,
      checkboxtData
    } = this.state;
    return (
      <div>
        <form>
          {initialQuestion && (
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

          {noFieldsetDisplay && (
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
          {yesFieldsetDisplay && (
            <Fieldset
              legendText="Please let us know why you are dissatisfied"
              className="fadeIn">
              {checkboxtData.map((eachItem, index) => (
                <Checkbox
                  key={index}
                  id={eachItem.id}
                  labelText={eachItem.labelText}
                />
              ))}

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
