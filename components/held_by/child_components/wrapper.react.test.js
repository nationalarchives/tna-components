import React from 'react';
import TestRenderer from 'react-test-renderer';
import Wrapper from './wrapper.react';
import Headline from './headline.react';

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
    expect(testRendererJSON.props.id).toBe('held-by-react-component');
  });

  it("=> Headline's tag type h1 exists", () => {
    expect(testRendererJSON.children[0].type).toBe('h1');
  });
});
