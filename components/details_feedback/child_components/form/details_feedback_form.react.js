import React, { Component } from 'react';
import Fieldset from '../fieldset/details_feedback_fieldset.react';
import Button from '../button/details_feedback_widget_button.react';
import Checkbox from '../checkbox/details_feedback_widget_checkbox.react';
import Comment from '../comment/details_feedback_comment.react';
import { Data } from '../../data';

class DetailsFeedbackForm extends Component {
  state = {
    Data,
    initialQuestion: true,
    noFieldsetDisplay: false,
    yesFieldsetDisplay: false
  };
  formRef = React.createRef();

  toggleFieldset = (objKey, objKeyTwo, boolOne, boolTwo) => {
    this.setState({ [objKey]: boolOne });
    this.setState({ [objKeyTwo]: boolTwo });
  };

  formSubmit = e => {
    e.preventDefault();
    //console.log('submited');
    //console.log(this.formRef.current.focusTextInput());
    const {
      comment_for_satisfaction,
      comment_for_dissatisfaction
    } = this.formRef;

    if (comment_for_dissatisfaction !== undefined) {
      console.log(comment_for_dissatisfaction.value);
    }
    if (comment_for_satisfaction !== undefined) {
      console.log(comment_for_satisfaction.value);
    }
  };

  render() {
    const {
      initialQuestion,
      noFieldsetDisplay,
      yesFieldsetDisplay
    } = this.state;

    const { yesFieldsetData, noFieldsetData } = this.state.Data;

    return (
      <div>
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
      </div>
    );
  }
}

export default DetailsFeedbackForm;
