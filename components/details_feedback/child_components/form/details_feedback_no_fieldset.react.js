import React, { Component } from "react";
import FeedbackButton from "../button/details_feedback_widget_button.react";

class NoFieldset extends Component {
	render() {
		return (
			<React.Fragment>
				<fieldset id="no-fieldset">
					<legend>We'd like to hear from you</legend>
					<label for="explore-comments">
						Your feedback helps us improve our services. Please share any
						comments below.
					</label>
					<input type="text" id="no-comments" />
					<p>Please do not include personal contact details.</p>
					<FeedbackButton type="button" name="no" title="Submit" />
					<FeedbackButton type="button" name="yes" title="Cancel" />
				</fieldset>
			</React.Fragment>
		);
	}
}

export default NoFieldset;
