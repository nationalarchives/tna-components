import React from 'react';
import TestRenderer from 'react-test-renderer';
import Headline from './headline.react';

let testRenderer, testInstance, testRendererJSON;

beforeAll(() => {
  testRenderer = TestRenderer.create(<Headline />);
  testInstance = testRenderer.root;
  testRendererJSON = testRenderer.toJSON();
});

describe('Headline component', () => {
  it('=> Prop H1 exists', () => {
    expect(testRendererJSON.type).toBe('h1');
  });
});
