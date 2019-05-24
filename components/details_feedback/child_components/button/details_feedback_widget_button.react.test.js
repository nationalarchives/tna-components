import React from 'react';
import TestRenderer from 'react-test-renderer';
import renderer from 'react-test-renderer';
import Button from './details_feedback_widget_button.react';

let testRenderer, testInstance, testRendererToJson;

describe("Check DOM element and it's attributes", () => {
  testRenderer = TestRenderer.create(
    <Button
      type="button"
      buttonText="This is a button"
      onClick={() => console.log('This is a button component')}
    />
  );
  testInstance = testRenderer.root;
  testRendererToJson = testRenderer.toJSON();

  it('Should have an <button> tag', () => {
    expect(testRendererToJson.type).toBe('button');
    expect(testRendererToJson.type === 'div').toBeFalsy;
  });
});

describe('<Button>', () => {
  it('renders the correct text', () => {
    const buttonText = 'submit';
    const inst = renderer.create(<Button buttonText={buttonText} />);
  });

  it('renders the correct type', () => {
    const type = 'submit';
    const inst = renderer.create(
      <Button buttonText="buttonText" type={type} />
    );
  });
});
