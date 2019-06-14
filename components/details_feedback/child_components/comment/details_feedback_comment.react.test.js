import React from 'react';
import TestRenderer from 'react-test-renderer';
import Comment from './details_feedback_comment.react';

let testRenderer, testRendererToJson;

// Snapshot test 1
it('renders the checkbox component correctly', () => {
  const items = ['Comment Label'];
  const tree = TestRenderer.create(
    <Comment commentLabel={items[0]} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

// Snapshot test 2
it('renders the checkbox component with optional props', () => {
  const items = [
    'Hello world',
    'this-is-the-id',
    () => console.log('Function test'),
    'Comment warning'
  ];
  const tree = TestRenderer.create(
    <Comment
      id={items[1]}
      commentLabel={items[0]}
      onChange={items[2]}
      commentWarning={items[3]}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

// Unit test
describe("Check DOM element and it's attributes", () => {
  const items = ['Comment Label'];
  testRenderer = TestRenderer.create(<Comment commentLabel={items[0]} />);

  testRendererToJson = testRenderer.toJSON();
  it('Should have an <div> tag', () => {
    expect(testRendererToJson.type).toBe('div');
  });
  it('Should have a class', () => {
    expect(testRendererToJson.props.className).toBe('comment');
  });
  it('Should have children', () => {
    expect(testRendererToJson.children.length).toBe(2);
    expect(testRendererToJson.children[0].type).toBe('label');
    expect(testRendererToJson.children[1].type).toBe('textarea');
  });
  it('Should have a label tag with props', () => {
    expect(
      testRendererToJson.children[0].props.hasOwnProperty('for')
    ).toBeTruthy();
  });
  it('Should have a input tag with props', () => {
    expect(
      testRendererToJson.children[1].props.hasOwnProperty('onChange')
    ).toBeTruthy();
    expect(
      testRendererToJson.children[1].props.hasOwnProperty('name')
    ).toBeTruthy();
    expect(
      testRendererToJson.children[1].props.hasOwnProperty('rows')
    ).toBeTruthy();
    expect(
      testRendererToJson.children[1].props.hasOwnProperty('cols')
    ).toBeTruthy();
    expect(
      testRendererToJson.children[1].props.hasOwnProperty('id')
    ).toBeTruthy();
    expect(
      testRendererToJson.children[1].props.hasOwnProperty('autoFocus')
    ).toBeTruthy();
  });
});
