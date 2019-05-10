import React, { Component } from "react";

import DetailsFeedbackForm from "./child_components/form/details_feedback_widget.react";
import FeedbackHeader from "./child_components/header/details_feedback_header.react";

import "./style.scss";

class DetailsFeedbackWidget extends Component {
	render() {
		return (
			<div className="details-feedback-widget">
				<FeedbackHeader componentTitle="Feedback" />
				<DetailsFeedbackForm />
			</div>
		);
	}
}
export default DetailsFeedbackWidget;
