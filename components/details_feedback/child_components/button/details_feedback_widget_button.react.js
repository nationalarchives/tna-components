import React from "react";

const FeedbackButton = props => {
	const { title, type, name } = props;
	return (
		<React.Fragment>
			<button type={type} name={name}>
				{title}
			</button>
		</React.Fragment>
	);
};

FeedbackButton.defaultProps = {
	title: "Enter button title"
};

export default FeedbackButton;
