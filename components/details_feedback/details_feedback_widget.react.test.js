import React from 'react';
import DetailsFeedbackWidget from './details_feedback_widget.react';
import TestRenderer from 'react-test-renderer';

// // Snapshot 1
it('renders correctly', () => {
  const tree = TestRenderer.create(<DetailsFeedbackWidget id="what-to-expect-form" />).toJSON();
  expect(tree).toMatchSnapshot();
});
