import React from "react";

const FeedbackHeading = props => {
	const { title } = props;
	return (
		<React.Fragment>
			<h2>{title}</h2>
		</React.Fragment>
	);
};

FeedbackHeading.defaultProps = {
	title: "Feedback"
};

export default FeedbackHeading;
