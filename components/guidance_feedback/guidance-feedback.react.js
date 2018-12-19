import React, { Component } from 'react';
import Textarea from './child_components/textarea/textarea.react';
import Button  from './child_components/button/button.react';
import './style.scss';


export default class GuidanceFeedback extends Component {
    
    constructor(props){
        super(props);
        
        // Set properties
        this.textarea = null;
        this.objGTM = {};

        // Bind methods to the class component construtor
        this.handleSubmit = this.handleSubmit.bind(this);
        this.buildGTMObj = this.buildGTMObj.bind(this);
        this.updateStateBtnNo = this.updateStateBtnNo.bind(this);
        this.updateStateBtnYes = this.updateStateBtnYes.bind(this);
        this.pushInDataLayer = this.pushInDataLayer.bind(this);

        this.setTextareaRef = element => {
            this.textarea = element;
        };

        // Define default state props
        this.state = {
            btnVisible: true,
            formVisible: false,
            label:'',
            fieldId:'',
            message: 'Did you find the guidance you needed?',
        }
    }    

    buildGTMObj(obj) {
        // Focus the text input using the raw DOM API
        if (this.textarea) {
            obj.event = 'Feedback';
            obj.eventCategory= 'Research guides feedback';
            obj.eventLabel = this.textarea.value === '' ? 'No comment made' : this.textarea.value ;
            obj.eventAction = this.textarea.id === 'field-no'? 'No' : 'Yes';
            return obj;
        }
    }

    pushInDataLayer(obj) {
        let wd = window.dataLayer || [];
        (!!obj || typeof obj === 'object') ? wd.push(obj) : '';
    
        return obj;
    }

    updateStateBtnYes(){
        this.setState(state => ({
            btnVisible: !state.btnVisible,
            formVisible: !state.formVisible,
            label:'Any comments on your experience?',
            fieldId:'field-yes'
        }));
    }
    updateStateBtnNo(){
        this.setState(state => ({
            btnVisible: !state.btnVisible,
            formVisible: !state.formVisible,
            label:'What did you expect to find?',
            fieldId:'field-no'
        }));
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState(state => ({
            btnVisible: false,
            formVisible: false,
            label:state.label,
            fieldId:state.fieldId,
            message: 'Thank you for your feedback.',
        }));

        // Build the GTM Object
        this.buildGTMObj(this.objGTM);
        // Push the GTM Object in dataLayer
        this.pushInDataLayer(this.objGTM);

        return true;
    }
    
    render() {
        const btnVisible    = this.state.btnVisible,
              formVisible   = this.state.formVisible,
              fieldLabel    = this.state.label,
              fieldId       = this.state.fieldId;

        return (
            <form action="" id="guidance-feedback" className="react-component-gf">
                <h2>Feedback</h2>
                <h3 id="aria">{ this.state.message}</h3>
                <Button 
                    onClick={ this.updateStateBtnNo }
                    className={ btnVisible ? "btn--no show":"btn--no hide"} 
                    type="button" 
                    name="btn--no"
                >
                    No
                </Button>

                <Button 
                    onClick={ this.updateStateBtnYes  }
                    className={ btnVisible ? "btn--yes show":"btn--yes hide"} 
                    type="button" 
                    name="btn--yes"
                >
                    Yes
                </Button>
                
                <fieldset className={formVisible ? "show":"hide"}>
                    <Textarea id={fieldId} label={fieldLabel} name={fieldId} ref={this.setTextareaRef}/>

                    <input 
                        type="submit" 
                        value="Send" 
                        className="btn btn--send"
                        onClick={this.handleSubmit}
                    />
                    <input 
                        type="reset" 
                        value="Cancel" 
                        className="btn btn--cancel"
                    />
                </fieldset>
            </form>
        );
    }
}