import React from "react";

const FeedbackHeader = props => {
	const { componentTitle } = props;
	const h2Style = {
		fontFamily: "'Open Sans',sans-serif",
		fontSize: "1em",
		fontWeight: 700,
		display: "inline - block",
		margin: ".3em 0",
		color: "#000"
	};
	return (
		<React.Fragment>
			<h2 style={h2Style}>{componentTitle}</h2>
		</React.Fragment>
	);
};

export default FeedbackHeader;
