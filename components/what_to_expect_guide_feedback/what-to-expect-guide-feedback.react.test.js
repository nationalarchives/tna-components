import React from 'react';
import WTEGFeedbackWidget from './what-to-expect-guide-feedback.react';
import TestRenderer from 'react-test-renderer';

// // Snapshot 1
it('renders correctly', () => {
  const tree = TestRenderer.create(<WTEGFeedbackWidget />).toJSON();
  expect(tree).toMatchSnapshot();
});
