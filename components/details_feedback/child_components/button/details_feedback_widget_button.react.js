import React, { Component } from "react";

class FeedbackButton extends Component {
	render() {
		const { type, name, title } = this.props;
		return (
			<React.Fragment>
				<button type={type} name={name}>
					{title}
				</button>
			</React.Fragment>
		);
	}
}

FeedbackButton.defaultProps = {
	title: "Enter button title"
};

export default FeedbackButton;
