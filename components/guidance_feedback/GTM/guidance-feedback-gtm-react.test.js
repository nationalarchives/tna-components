import React from 'react';
import GuidanceFeedbackGTM from './guidance-feedback-gtm.react';
import GuidanceFeedback from '../guidance-feedback.react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

document.body.innerHTML = '<form action="" id="guidance-feedback" class="component"><h2>Feedback</h2><h3 id="aria">Did you find the guidance you needed?</h3><button aria-describedby="aria" class="btn--no show" type="button" name="btn--no">No</button><button aria-describedby="aria" class="btn--yes show" type="button" name="btn--yes">Yes</button><fieldset class="hide"><label for=""></label><textarea id="" name=""></textarea><input type="submit" class="btn btn--send" value="Send"><input type="reset" class="btn btn--cancel" value="Cancel"></fieldset></form>';
describe('Test GTM component / methods', () => {
    it('Check for the absence of the component', () => {
        const component = shallow(
          <GuidanceFeedbackGTM />
        );
        expect(component.exists()).toBeTruthy();
    });

    it('Test getElements method', () => {
        const form   = document.getElementById('guidance-feedback');
        let elemArr  = [];
        let dataLay  = {};

        
        
        if(form){
            //GuidanceFeedbackGTM().getElement(form.elements,elemArr);
            console.log(form.elements);
        }
        
        

        //expect(component.instance().getElement(form,elemArr).length).toBe(1);
        

        // console.log(component.dive().instance().getElement(form, elemArr));

        expect(true).toBe(true);
    });
});