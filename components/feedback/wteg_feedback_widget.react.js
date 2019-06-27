import React, { Component } from 'react';
import WTEGFeedbackForm from './child_components/form/wteg_feedback_form/wteg_feedback_form.react';

import './style.scss';

class WTEGFeedbackWidget extends Component {
	render() {
		return (
			<React.Fragment>
				<h2>Feedback</h2>
				<WTEGFeedbackForm id="what-to-expect-form" />
			</React.Fragment>
		);
	}
}
export default WTEGFeedbackWidget;
