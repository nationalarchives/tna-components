import React, { Component } from "react";

import FeedbackHeading from "./child_components/heading/details_feedback_widget_Heading.react";
import DetailsFeedbackForm from "./child_components/form/details_feedback_widget.react";

import "./style.scss";

class DetailsFeedbackWidget extends Component {
	render() {
		return (
			<div className="details-feedback-widget">
				<FeedbackHeading />
				<DetailsFeedbackForm />
			</div>
		);
	}
}
export default DetailsFeedbackWidget;
