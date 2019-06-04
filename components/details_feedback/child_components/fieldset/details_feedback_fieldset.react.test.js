import React from 'react';
import TestRenderer from 'react-test-renderer';
import renderer from 'react-test-renderer';
import Fieldset from './details_feedback_fieldset.react';

let testRenderer, testRendererToJson;

// Snapshot test 1
it('renders the checkbox component correctly', () => {
  const items = [
    'Legend heading',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  ];
  const tree = renderer
    .create(
      <Fieldset legendText={items[0]}>
        <p>{items[1]}</p>
      </Fieldset>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe("Check DOM element and it's attributes", () => {
  const items = [
    'Legend heading',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  ];
  testRenderer = TestRenderer.create(
    <Fieldset legendText={items[0]}>
      <p>{items[1]}</p>
    </Fieldset>
  );

  testRendererToJson = testRenderer.toJSON();
  it('Should have an <fieldset> tag', () => {
    expect(testRendererToJson.type).toBe('fieldset');
    expect(testRendererToJson.hasOwnProperty('children')).toBeTruthy();
    expect(testRendererToJson.children.length).toBe(2);
  });
  it('Should have props', () => {
    expect(testRendererToJson.props.hasOwnProperty('className')).toBeTruthy();
    expect(testRendererToJson.props.hasOwnProperty('id')).toBeTruthy();
    expect(testRendererToJson.props.hasOwnProperty('className')).toBeTruthy();
  });
  it('Should have legend tag', () => {
    expect(testRendererToJson.children[0].type).toBe('legend');
    expect(
      testRendererToJson.children[0].hasOwnProperty('children')
    ).toBeTruthy();
  });
});
