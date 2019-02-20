import React from 'react';
import ReactDOM from 'react-dom';
import RecommendedLinks from './recommended_links.react';
import { shallow, mount, render } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<RecommendedLinks />', () => {
  const componentShallow = shallow(<RecommendedLinks />),
    componentInstance = componentShallow.instance(),
    div = document.createElement('div');

  it('renders without crashing', () => {
    ReactDOM.render(<RecommendedLinks />, div);
  });

  it('check if the unordered list exists', () => {
    expect(componentShallow.find('ul').length).toEqual(1);
  });

  it('check if the className is searchList', () => {
    expect(componentShallow.find('ul').hasClass('searchList')).toBe(true);
  });

  it('unique()', () => {
    let arr = ['a', 'b', 'b'];
    expect(componentInstance.unique(arr)).toEqual(['a', 'b']);
  });

  it('removeUrlStringSeparators()', () => {
    expect(
      componentInstance.removeUrlStringSeparators('birth+certificate')
    ).toBe('birth certificate');
    expect(componentInstance.removeUrlStringSeparators('')).toBeFalsy();
  });
});
