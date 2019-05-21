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

    nothingToImproveObjWithComments:
      Data.noFieldsetData.gtmData.nothingToImproveWithComments
  };
  formRef = React.createRef();

  updateGTMCheckboxes = e => {
    if (e.target.checked === true) {
      let items = new Set([...this.state.gtmCheckboxes, e.target.id]);

      this.setState({
        gtmCheckboxes: [...items]
      });
    } else {
      if (this.state.gtmCheckboxes.indexOf(e.target.id) !== -1) {
        let items = this.state.gtmCheckboxes.filter(item => {
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

  handleCommentBox = () => {
    const { comment_for_satisfaction } = this.formRef;
    if (comment_for_satisfaction !== undefined) {
      if (comment_for_satisfaction.value.length === 0) {
        this.setState({
          nothingToImproveObjWithComments: {
            ...this.state.nothingToImproveObjWithComments,
            eventLabel: null
          }
        });
      } else {
        this.setState({
          nothingToImproveObjWithComments: {
            ...this.state.nothingToImproveObjWithComments,
            eventLabel: comment_for_satisfaction.value
          }
        });
      }
    }
  };

  formSubmit = e => {
    e.preventDefault();
    this.setState({ message: true });
    this.setState({ form: false });
    this.setState({ noFieldsetDisplay: false });
  };

  render() {
    const {
      initialQuestion,
      noFieldsetDisplay,
      yesFieldsetDisplay,
      displayForm,
      message
    } = this.state;

    const { yesFieldsetData, noFieldsetData } = this.state.Data;

    //console.log(this.getNoFieldsetData());

    return (
      <div>
        {displayForm && (
          <form onSubmit={this.formSubmit} ref={form => (this.formRef = form)}>
            {initialQuestion && (
              <Fieldset
                legendText="Could this page be improved?"
                className="initail-question">
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
                  onChange={this.handleCommentBox}
                />
                <Button buttonText="Send" type="submit" />
                <Button
                  buttonText="Cancel"
                  type="reset"
                  onClick={() => {
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
                {yesFieldsetData.checkboxtData.map((eachItem, index) => (
                  <Checkbox
                    key={index}
                    id={eachItem.id}
                    labelText={eachItem.labelText}
                    checked={eachItem.checked}
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
                  onClick={() =>
                    this.toggleFieldset(
                      'initialQuestion',
                      'yesFieldsetDisplay',
                      true,
                      false
                    )
                  }
                />
              </Fieldset>
            )}
          </form>
        )}
        {message && <Message message="Thank you for your feedback" />}
      </div>
    );
  }
}

export default DetailsFeedbackForm;
