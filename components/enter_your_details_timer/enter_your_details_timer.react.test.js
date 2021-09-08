import React from 'react';
import ReactDOM from 'react-dom';
import EnterYourDetailsTimer from './enter_your_details_timer.react';
import { shallow, mount, render } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<EnterYourDetailsTimer />', () => {
    const componentShallow = shallow(<EnterYourDetailsTimer/>),
        componentInstance = componentShallow.instance(),
        div = document.createElement('div');

    it('renders without crashing', () => {
        ReactDOM.render(<EnterYourDetailsTimer/>, div);
    });

});
