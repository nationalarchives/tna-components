import React from 'react';
import TestRenderer from 'react-test-renderer';
import Wrapper from './wrapper.react';
import Headline from '../headline/headline.react';

let testRenderer, testInstance, testRendererJSON;

beforeAll(() => {
  testRenderer = TestRenderer.create(
    <Wrapper>
      <Headline />
    </Wrapper>
  );
  testInstance = testRenderer.root;
  testRendererJSON = testRenderer.toJSON();
});

describe('Wrapper component', () => {
  it('=> Prop ID = held-by-react-component', () => {
    expect(testInstance.type(Wrapper).props.id).toBe(undefined);
  });
});
