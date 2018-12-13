import React, { Component } from 'react';
import GuidanceFeedbackGTM from  './GTM/guidance-feedback-gtm.react';
import './style.scss';


export default class GuidanceFeedback extends Component {
    
    constructor(props){
        super(props);
        
        // Bind methods to the class component construtor
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleYesClick = this.handleYesClick.bind(this);
        this.handleNoClick = this.handleNoClick.bind(this);

        // Define state props
        this.state = {
            btnVisible: true,
            formVisible: false,
            label:'',
            fieldId:'',
            message: 'Did you find the guidance you needed?',
        }
    }
    

    handleNoClick(){
        this.setState(state => ({
            btnVisible: !state.btnVisible,
            formVisible: !state.formVisible,
            label:'What did you expect to find?',
            fieldId:'field-no'
        }));
    }

    handleYesClick(){
        this.setState(state => ({
            btnVisible: !state.btnVisible,
            formVisible: !state.formVisible,
            label:'Any comments on your experience?',
            fieldId:'field-yes'
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

        // Get form data and send it to GTM/GA
        GuidanceFeedbackGTM('#guidance-feedback').aka();

        return true;
    }

    render() {
        const btnVisible    = this.state.btnVisible,
              formVisible   = this.state.formVisible,
              fieldLabel    = this.state.label,
              fieldId       = this.state.fieldId;

        return (
            <form action="" id="guidance-feedback" className="component">
                <h2>Feedback</h2>
                <h3 id="aria">{ this.state.message}</h3>
                <button 
                    aria-describedby="aria"
                    onClick={this.handleNoClick}
                    className={ btnVisible ? "btn--no show":"btn--no hide"}
                    type="button" 
                    name="btn--no" 
                >
                    No
                </button>

                <button 
                    aria-describedby="aria"
                    onClick={this.handleYesClick}
                    className={ btnVisible ? "btn--yes show":"btn--yes hide"}
                    type="button" 
                    name="btn--yes"
                >
                    Yes
                </button>
                
                <fieldset className={formVisible ? "show":"hide"}>
                    <label htmlFor={fieldId}>
                        {fieldLabel}
                    </label>
                    <textarea id={fieldId} name={fieldId}></textarea>

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