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
    nothingToImproveCancel: Data.noFieldsetData.gtmData.cancel,

    somethingToImproveComment: Data.yesFieldsetData.gtmData.gtmBody.eventLabel,
    somethingToImproveCancel: Data.yesFieldsetData.gtmData.cancel,

    gtmProperties: {
      gtmEvent: Data.yesFieldsetData.gtmData.gtmBody.event,
      gtmEventCategory: Data.yesFieldsetData.gtmData.gtmBody.eventCategory,
      gtmEventAction: Data.yesFieldsetData.gtmData.gtmBody.eventAction
    }
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

  handleYesCommentBox = () => {
    const { yes_fieldset, comment_for_dissatisfaction } = this.formRef;
    const { Data } = this.state;
    if (yes_fieldset !== undefined) {
      if (comment_for_dissatisfaction.value.length > 0) {
        this.setState({
          somethingToImproveComment: comment_for_dissatisfaction.value
        });
      } else {
        this.setState({
          somethingToImproveComment:
            Data.yesFieldsetData.gtmData.gtmBody.eventLabel
        });
      }
    }
  };

  somethingToImprove = () => {
    const { somethingToImproveComment, gtmCheckboxes } = this.state;
    const {
      gtmEvent,
      gtmEventAction,
      gtmEventCategory
    } = this.state.gtmProperties;

    let checkboxes =
      gtmCheckboxes.length > 0
        ? gtmCheckboxes.join(', ')
        : 'Nothing is checked';

    return {
      event: gtmEvent,
      eventCategory: gtmEventCategory,
      eventAction: gtmEventAction,
      eventLabel: `Checked options: ${checkboxes} | Comments: ${somethingToImproveComment}`
    };
  };

  pushInDataLayer = obj => {
    let wd = window.dataLayer || [];
    !!obj || typeof obj === 'object' ? wd.push(obj) : '';

    return obj;
  };

  formSubmit = e => {
    const { somethingToImprove } = this;
    const { nothingToImprove } = this.state;
    const { comment_for_satisfaction, yes_fieldset } = this.formRef;

    e.preventDefault();
    this.setState({ message: true });
    this.setState({ form: false });
    this.setState({ noFieldsetDisplay: false });
    this.setState({ yesFieldsetDisplay: false });
    if (comment_for_satisfaction !== undefined) {
      this.pushInDataLayer(nothingToImprove);
    }
    if (yes_fieldset !== undefined) {
      this.pushInDataLayer(somethingToImprove());
    }
  };

  render() {
    const {
      initialQuestion,
      noFieldsetDisplay,
      yesFieldsetDisplay,
      displayForm,
      message,
      nothingToImproveCancel,
      somethingToImproveCancel
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
                id="no_fieldset"
                legendText={noFieldsetData.legend}
                className="noMarginLeft fadeIn">
                <Comment
                  id={noFieldsetData.commentData.id}
                  commentLabel={noFieldsetData.commentData.commentLabel}
                  commentWarning={noFieldsetData.commentData.commentWarning}
                  onChange={this.handleNoCommentBox}
                  autoFocus="true"
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
              <Fieldset
                legendText={yesFieldsetData.legend}
                className="fadeIn"
                id="yes_fieldset">
                {yesFieldsetData.checkboxData.map((eachItem, index) => (
                  <Checkbox
                    key={index}
                    id={eachItem.id}
                    labelText={eachItem.labelText}
                    onClick={e => this.updateGTMCheckboxes(e)}
                    autoFocus={index === 0 ? 'true' : null}
                  />
                ))}

                <Comment
                  id={yesFieldsetData.commentData.id}
                  commentLabel={yesFieldsetData.commentData.commentLabel}
                  commentWarning={yesFieldsetData.commentData.commentWarning}
                  onChange={this.handleYesCommentBox}
                />
                <Button buttonText="Send" type="submit" />
                <Button
                  buttonText="Cancel"
                  type="reset"
                  onClick={() => {
                    this.pushInDataLayer(somethingToImproveCancel);
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
