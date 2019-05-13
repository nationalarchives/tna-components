import React, { Component } from "react";
import InitialFieldset from "../form/details_feedback_initial_fieldset.react";
import NoFieldset from "../form/details_feedback_no_fieldset.react";

class DetailsFeedbackForm extends Component {
	
	render() {
		return (
			<React.Fragment>
				<form action="" id="discovery-feedback-form">
					<InitialFieldset />
					<NoFieldset />
				</form>
			</React.Fragment>
		);
	}
}

export default DetailsFeedbackForm;
