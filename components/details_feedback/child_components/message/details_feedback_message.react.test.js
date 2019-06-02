import React from 'react';
import Message from './details_feedback_message.react';
import TestRenderer from 'react-test-renderer';
import renderer from 'react-test-renderer';

let testRenderer, testRendererToJson;

// Snapshot 1
it('renders correctly', () => {
  const items = ['Hello message component'];
  const tree = renderer.create(<Message message={items[0]} />).toJSON();
  expect(tree).toMatchSnapshot();
});

// Snapshot 2
it('renders the Message component with optional props', () => {
  const items = ['Hello message component', 'message-class'];
  const tree = renderer
    .create(<Message message={items[0]} className={items[1]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// Unit test
describe("Check DOM element and it's attributes", () => {
  const items = ['Hello message text'];
  testRenderer = TestRenderer.create(<Message message={items[0]} />);

  testRendererToJson = testRenderer.toJSON();
  it('Should have an <div> tag', () => {
    expect(testRendererToJson.type).toBe('p');
  });
  it('Should have a prop of className', () => {
    expect(testRendererToJson.props.hasOwnProperty('className')).toBeTruthy();
  });
  it('Should have children props', () => {
    expect(testRendererToJson.children.length).toBe(1);
  });
});
