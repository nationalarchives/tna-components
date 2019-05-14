import React from 'react';
import TestRenderer from 'react-test-renderer';
import HomePageSearchDiscovery from './home_page_search_discovery.react';
import Form from '../global/form/form.react';
import Input from '../global/form/input.react';
import Select from '../global/form/select.react';

let testRenderer, testInstance;

beforeAll(() => {
  testRenderer = TestRenderer.create(<HomePageSearchDiscovery />);
  testInstance = testRenderer.root;
});

describe('HomePageSearchDiscovery component', () => {
  it('=> Form Props are the correct ones', () => {
    expect(testInstance.findByType(Form).props.method).toBe('get');
    expect(testInstance.findByType(Form).props.action).toBe(
      'https://discovery.nationalarchives.gov.uk/results/r'
    );
  });
  it('=> Form elements exists', () => {
    expect(testInstance.findAllByType(Input).length).toEqual(4);
    expect(testInstance.findAllByType(Select).length).toEqual(1);
  });
  it('=> onChangeInput', () => {
    const event = (id, value) => {
      return {
        preventDefault() {},
        target: {
          id,
          value
        }
      };
    };

    expect(testInstance.findAllByType(Input)[0].props.value).toBe('');
    expect(testInstance.findAllByType(Input)[1].props.value).toBe('');
    expect(testInstance.findAllByType(Input)[2].props.value).toBe('');

    testInstance
      .findAllByType(Input)[0]
      .props.onChange(event('search-all-collections', 'show input'));

    expect(testInstance.findAllByType(Input)[0].props.value).toBe('show input');
  });

  it('DOM snapshot test', () => {
    let tree = testRenderer.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
