import React from 'react';
import DetailsFeedbackForm from './details_feedback_form.react';
import { create } from 'react-test-renderer';
import renderer from 'react-test-renderer';
// import Button from '../button/details_feedback_widget_button.react';

// Snapshot 1
it('renders correctly', () => {
  const tree = renderer.create(<DetailsFeedbackForm />).toJSON();
  expect(tree).toMatchSnapshot();
});

// Unit test
describe('Test state', () => {
  const component = create(<DetailsFeedbackForm />);
  const instance = component.getInstance();
  const {
    initialQuestion,
    noFieldsetDisplay,
    yesFieldsetDisplay,
    message,
    displayForm,
    gtmCheckboxes,
    nothingToImproveEventLabel
  } = instance.state;
  it('checking the initial state', () => {
    expect(initialQuestion).toBeTruthy();
    expect(noFieldsetDisplay).toBeFalsy();
    expect(yesFieldsetDisplay).toBeFalsy();
    expect(message).toBeFalsy();
    expect(displayForm).toBeTruthy();
    expect(gtmCheckboxes).toEqual([]);
    expect(nothingToImproveEventLabel).toBe('No comments made');
  });
});
