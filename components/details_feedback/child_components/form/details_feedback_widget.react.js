import React, { Component } from "react";
import FeedbackButton from "../button/details_feedback_widget_button.react";

class DetailsFeedbackForm extends Component {
	render() {
		return (
			<React.Fragment>
				<form action="" id="discovery-feedback-form">
					<fieldset id="initial-question">
						<legend>Could this page be improved?</legend>
						<FeedbackButton type="button" name="no" title="No" />
						<FeedbackButton type="button" name="yes" title="Yes" />
					</fieldset>
				</form>
			</React.Fragment>
		);
	}
}

export default DetailsFeedbackForm;
