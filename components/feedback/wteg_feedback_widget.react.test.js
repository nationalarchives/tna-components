import React from 'react';
import WTEGFeedbackWidget from './wteg_feedback_widget.react';
import TestRenderer from 'react-test-renderer';

// // Snapshot 1
it('renders correctly', () => {
	const tree = TestRenderer.create(<WTEGFeedbackWidget />).toJSON();
	expect(tree).toMatchSnapshot();
});
