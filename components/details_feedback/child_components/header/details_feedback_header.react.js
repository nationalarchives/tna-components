import React from "react";

const FeedbackHeader = props => {
	const { componentTitle } = props;
	return (
		<React.Fragment>
			<h2>{componentTitle}</h2>
		</React.Fragment>
	);
};

export default FeedbackHeader;
