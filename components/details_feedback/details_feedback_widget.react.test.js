import React from 'react';
import DetailsFeedbackWidget from './details_feedback_widget.react';
import renderer from 'react-test-renderer';

// // Snapshot 1
it('renders correctly', () => {
  const tree = renderer.create(<DetailsFeedbackWidget />).toJSON();
  expect(tree).toMatchSnapshot();
});
