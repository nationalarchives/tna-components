import React, {Component} from 'react';
import Button from '../../button/details_feedback_widget_button.react';
import Fieldset from '../../fieldset/details_feedback_fieldset.react';
import Comment from "../../comment/details_feedback_comment.react";
import { Data } from '../../../data';
import Message from "../../message/details_feedback_message.react";

class WTEGFeedbackForm extends Component{
	state = {
		comments: '',
		Data,
		displayCommentBox: false,
		displayForm: true,
		guideHelpful: false,
		initialQuestion: true,
		message: false
	};

	buildGtmObj = (guideHelpful, comments) => {
		return {
			event: 'DiscoveryWTEGFeedback',
			eventCategory: 'Discovery What To Expect feedback',
			eventAction: `Did you find this helpful: ${guideHelpful}`,
			eventLabel: `Comments: ${comments}`
		}
	};

	handleChange = e => {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = e => {
		let comments = this.state.comments;
		let guideHelpful = this.state.guideHelpful ? 'Yes' : 'No';

		if(comments.length < 1){
			comments = 'No comments made.';
		}

		this.setState({ message: true });
		this.setState({ displayCommentBox: false });
		this.setState({ displayForm: false });

		//Push to Data Layer
		this.pushInDataLayer(this.buildGtmObj(guideHelpful, comments));
		e.preventDefault();
	};

	pushInDataLayer = obj => {
		let wd = window.dataLayer || [];
		!!obj || typeof obj === 'object' ? wd.push(obj) : '';

		return obj;
	};

	toggleFieldset = (objKeyOne, boolOne, objKeyTwo, boolTwo, objKeyThree, boolThree) => {
		this.setState({ [objKeyOne]: boolOne });
		this.setState({ [objKeyTwo]: boolTwo });
		this.setState({ [objKeyThree]: boolThree });
	};

	render(){
		const {
			displayCommentBox,
			displayForm,
			initialQuestion,
			guideHelpful,
			message
		} = this.state;

		const { yesFieldsetData, noFieldsetData, messageText } = this.state.Data;

		return(
			<div>
				{displayForm && (
					<form onSubmit={this.handleSubmit}>
						{initialQuestion && (
							<Fieldset
								legendText="Did you find this helpful?"
								className="initial-question">
								<Button
									buttonText="Yes"
									onClick={() => {
										this.toggleFieldset(
											'displayCommentBox',
											true,
											'initialQuestion',
											false,
											'guideHelpful',
											true
										)
									}}
									type="button"
								/>
								<Button
									buttonText="No"
									onClick={() => {
										this.toggleFieldset(
											'displayCommentBox',
											true,
											'initialQuestion',
											false,
											'guideHelpful',
											false
										)
									}}
									type="button"
								/>
							</Fieldset>
						)}
						{displayCommentBox && (
							<Fieldset
								id="no_fieldset"
								legendText={guideHelpful ? noFieldsetData.legend : yesFieldsetData.legend}
								className="noMarginLeft fadeIn">
								<Comment
									id="comments"
									commentLabel={guideHelpful ?
										noFieldsetData.commentData.commentLabel : yesFieldsetData.commentData.commentLabel}
									commentWarning={guideHelpful ?
										noFieldsetData.commentData.commentWarning : yesFieldsetData.commentData.commentWarning}
									onChange={this.handleChange}
									autoFocus="true"
								/>
								<Button buttonText="Send" type="submit" />
								<Button
									buttonText="Cancel"
									type="reset"
									onClick={() => {
										this.toggleFieldset(
											'displayCommentBox',
											false,
											'initialQuestion',
											true,
											'guideHelpful',
											false
										)
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
		)
	}
}

export default WTEGFeedbackForm
