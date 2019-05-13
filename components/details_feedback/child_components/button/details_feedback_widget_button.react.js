import React, { Component } from "react";

class FeedbackButton extends Component {
	render() {
		return (
			<React.Fragment>
				<button type={this.props.type} name={this.props.name}>
					{this.props.title}
				</button>
			</React.Fragment>
		);
	}
}

FeedbackButton.defaultProps = {
	title: "Enter button title"
};

export default FeedbackButton;
