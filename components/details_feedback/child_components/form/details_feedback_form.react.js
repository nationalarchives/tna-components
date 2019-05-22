import React, { Component } from 'react';
import Fieldset from '../fieldset/details_feedback_fieldset.react';
import Button from '../button/details_feedback_widget_button.react';
import Checkbox from '../checkbox/details_feedback_widget_checkbox.react';
import Comment from '../comment/details_feedback_comment.react';
import Message from '../message/details_feedback_message.react';
import { Data } from '../../data';

class DetailsFeedbackForm extends Component {
  state = {
    Data,
    initialQuestion: true,
    noFieldsetDisplay: false,
    yesFieldsetDisplay: false,
    gtmCheckboxes: [],
    message: false,
    displayForm: true,

    nothingToImprove: Data.noFieldsetData.gtmData.nothingToImprove,
    nothingToImproveEventLabel:
      Data.noFieldsetData.gtmData.nothingToImprove.eventLabel,
    nothingToImproveCancel: Data.noFieldsetData.gtmData.cancel
  };
  formRef = React.createRef();

  updateGTMCheckboxes = e => {
    const { gtmCheckboxes } = this.state;
    if (e.target.checked === true) {
      let items = new Set([...gtmCheckboxes, e.target.id]);

      this.setState({
        gtmCheckboxes: [...items]
      });
    } else {
      if (gtmCheckboxes.indexOf(e.target.id) !== -1) {
        let items = gtmCheckboxes.filter(item => {
          if (item !== e.target.id) {
            return item;
          }
        });

        this.setState({
          gtmCheckboxes: items
        });
      }
    }
  };

  toggleFieldset = (objKey, objKeyTwo, boolOne, boolTwo) => {
    this.setState({ [objKey]: boolOne });
    this.setState({ [objKeyTwo]: boolTwo });
  };

  handleNoCommentBox = () => {
    const { comment_for_satisfaction } = this.formRef;
    const { nothingToImprove, nothingToImproveEventLabel } = this.state;
    if (comment_for_satisfaction !== undefined) {
      if (comment_for_satisfaction.value.length !== 0) {
        this.setState({
          nothingToImprove: {
            ...nothingToImprove,
            eventLabel: `Comments: ${comment_for_satisfaction.value}`
          }
        });
      } else {
        this.setState({
          nothingToImprove: {
            ...nothingToImprove,
            eventLabel: nothingToImproveEventLabel
          }
        });
      }
    }
  };

  pushInDataLayer = obj => {
    let wd = window.dataLayer || [];
    !!obj || typeof obj === 'object' ? wd.push(obj) : '';

    return obj;
  };

  formSubmit = e => {
    const { nothingToImprove } = this.state;

    e.preventDefault();
    this.setState({ message: true });
    this.setState({ form: false });
    this.setState({ noFieldsetDisplay: false });
    this.setState({ yesFieldsetDisplay: false });
    this.pushInDataLayer(nothingToImprove);
  };

  render() {
    const {
      initialQuestion,
      noFieldsetDisplay,
      yesFieldsetDisplay,
      displayForm,
      message,
      nothingToImproveCancel
    } = this.state;

    const { yesFieldsetData, noFieldsetData, messageText } = this.state.Data;

    return (
      <div>
        {displayForm && (
          <form onSubmit={this.formSubmit} ref={form => (this.formRef = form)}>
            {initialQuestion && (
              <Fieldset
                legendText="Could this page be improved?"
                className="initial-question">
                <Button
                  buttonText="No"
                  onClick={() =>
                    this.toggleFieldset(
                      'initialQuestion',
                      'noFieldsetDisplay',
                      false,
                      true
                    )
                  }
                  type="button"
                />
                <Button
                  buttonText="Yes"
                  onClick={() =>
                    this.toggleFieldset(
                      'initialQuestion',
                      'yesFieldsetDisplay',
                      false,
                      true
                    )
                  }
                  type="button"
                />
              </Fieldset>
            )}

            {noFieldsetDisplay && (
              <Fieldset
                legendText={noFieldsetData.legend}
                className="noMarginLeft fadeIn">
                <Comment
                  id={noFieldsetData.commentData.id}
                  commentLabel={noFieldsetData.commentData.commentLabel}
                  commentWarning={noFieldsetData.commentData.commentWarning}
                  onChange={this.handleNoCommentBox}
                />
                <Button buttonText="Send" type="submit" />
                <Button
                  buttonText="Cancel"
                  type="reset"
                  onClick={() => {
                    this.pushInDataLayer(nothingToImproveCancel);
                    this.toggleFieldset(
                      'initialQuestion',
                      'noFieldsetDisplay',
                      true,
                      false
                    );
                  }}
                />
              </Fieldset>
            )}
            {yesFieldsetDisplay && (
              <Fieldset legendText={yesFieldsetData.legend} className="fadeIn">
                {yesFieldsetData.checkboxData.map((eachItem, index) => (
                  <Checkbox
                    key={index}
                    id={eachItem.id}
                    labelText={eachItem.labelText}
                    onClick={e => this.updateGTMCheckboxes(e)}
                  />
                ))}

                <Comment
                  id={yesFieldsetData.commentData.id}
                  commentLabel={yesFieldsetData.commentData.commentLabel}
                  commentWarning={yesFieldsetData.commentData.commentWarning}
                />
                <Button buttonText="Send" type="submit" />
                <Button
                  buttonText="Cancel"
                  type="reset"
                  onClick={() => {
                    this.toggleFieldset(
                      'initialQuestion',
                      'yesFieldsetDisplay',
                      true,
                      false
                    );
                  }}
                />
              </Fieldset>
            )}
          </form>
        )}
        {message && (
          <Message className="fadeIn" message={messageText.thankyou} />
        )}
      </div>
    );
  }
}

export default DetailsFeedbackForm;
