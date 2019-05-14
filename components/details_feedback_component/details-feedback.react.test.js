import React from 'react';
import ReactDOM from 'react-dom';
import DetailsFeedback from './details-feedback.react.js';
import { shallow, mount, render } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<DetailsFeedbackReact />', () => {

    const componentShallow = shallow(<DetailsFeedback/>),
        div = document.createElement('div');

    it('renders without crashing', () => {
        ReactDOM.render(<DetailsFeedback/>, div);
    });

    it(`has a <h2> with the text 'details feedback'`, () => {
        expect(componentShallow.find('h2').exists()).toBe(true);
        expect(componentShallow.find('h2').text()).toBe('Feedback');
    });

});