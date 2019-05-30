import React from 'react';
import DetailsFeedbackForm from './details_feedback_form.react';
import renderer from 'react-test-renderer';

// // Snapshot 1
it('renders correctly', () => {
  const tree = renderer.create(<DetailsFeedbackForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
