import React from 'react';
import WTEGFeedbackForm from './wteg_feedback_form.react';
import TestRenderer, { create } from 'react-test-renderer';

// Snapshot 1
it('renders correctly', () => {
	const tree = TestRenderer.create(<WTEGFeedbackForm />).toJSON();
	expect(tree).toMatchSnapshot();
});

// Unit test
describe('Test state', () => {
	const component = create(<WTEGFeedbackForm />);
	const instance = component.getInstance();
	const {
		initialQuestion,
		displayCommentBox,
		guideHelpful,
		message,
		displayForm
	} = instance.state;
	it('checking the initial state', () => {
		expect(initialQuestion).toBeTruthy();
		expect(displayCommentBox).toBeFalsy();
		expect(guideHelpful).toBeFalsy();
		expect(message).toBeFalsy();
		expect(displayForm).toBeTruthy();
	});
});
