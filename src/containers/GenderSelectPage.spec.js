import React from 'react';
import {shallow, mount} from 'enzyme';
import {GenderSelectPage} from './GenderSelectPage';

describe('<GenderSelectPage/>', () => {
    const maleRadio = 0;
    const femaleRadio = 1;
    const selectButton = 2;
    
    it('should contain <input /> elements', () => {
        const actions = {
            selectGender: () => {}
        };

        const props = {
            gender: null
        };
        
        const wrapper = shallow(<GenderSelectPage actions={actions} {...props} />);
        
        const allInputs = wrapper.find('input');
        
        expect(allInputs.length).toEqual(3);        
        expect(allInputs.at(maleRadio).props().name).toEqual('gender');
        expect(allInputs.at(maleRadio).props().value).toEqual('male');
        expect(allInputs.at(femaleRadio).props().name).toEqual('gender');
        expect(allInputs.at(femaleRadio).props().value).toEqual('female');
        expect(allInputs.at(selectButton).props().value).toEqual('Submit'); 
    });

    it('should have jest mocking functionality', () => {
        let f = jest.fn();
        f();

        expect(f).toHaveBeenCalled();
    });

    it('should select female when clicked and submitted', () => {
        // Reference links, that don't seem to solve the problem completely:
        //
        // https://stackoverflow.com/questions/43825926/jest-fn-not-working-in-react-unit-test
        // https://stackoverflow.com/questions/43245040/using-jest-to-spy-on-method-call-in-componentdidmount// http://tobyho.com/2011/12/15/jasmine-spy-cheatsheet/
        // https://www.codementor.io/pkodmad/dom-testing-react-application-jest-k4ll4f8sd
        // https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.mdconsole.log(document)
        
        const expected = 'female';
        
        const actions = {
            selectGender: () => { console.log('fake called.'); }
        };

        const props = {
            gender: null 
        };

        let spy = spyOn(actions, 'selectGender');
         
        let wrapper = mount(<GenderSelectPage actions={actions} {...props} />, 
            {attachTo: document.getElementById('root')});
                   
        const allInputs = wrapper.find('input');
        
        expect(allInputs.at(femaleRadio).props().value).toEqual('female');
    
        allInputs.at(femaleRadio).simulate('click');
        allInputs.at(selectButton).simulate('submit');
        
        // wrapper.find('.submit-btn').first().simulate('submit');
        
        /* Can you access the checked property this way? 
           Apparently not. Not shown in the output.

            let x = allInputs.at(maleRadio).props();
            let y = allInputs.at(femaleRadio).props();
            console.log('Howdy:', x, y);
        */

        // GenderSelectPage can not find the selected radio button in the test
        // so the selectGender action is never called and these always fail.
        // (i.e. the console.log output in GenderSelectPage.handleSubmit is printed.)
        //
        // It seems we have the shadow dom from React but not a corresponding jsdom ...
        // how do you connect them?  ReactDom.render(...)?
        //
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith(expected);
        
        wrapper.unmount();
    });    
});
