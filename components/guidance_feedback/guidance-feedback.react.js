import React, { Component } from 'react';
import { format } from 'url';
import './style.scss';


export default class GuidanceFeedback extends Component {
    
    constructor(props){
        super(props);
        
        // Bind methods to the class component construtor
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleYesClick = this.handleYesClick.bind(this);
        this.handleNoClick = this.handleNoClick.bind(this);

        this.state = {
            disabled: '',
            isVisible: true,
            form:{
                label:'',
                fieldId:''
            },
            message: 'Did you find the guidance you needed?',
        }
    }

    handleNoClick(){
        this.setState(state => ({
            isVisible: !state.isVisible,
            form:{
                label:'What did you expect to find?',
                fieldId:'field-no'
            },
        }));
    }

    handleYesClick(){
        this.setState(state => ({
            isVisible: !state.isVisible,
            form:{
                label:'Any comments on your experience?',
                fieldId:'field-yes'
            },
        }));
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState(state => ({
            isVisible: !state.isVisible,
            message: 'Thank you for your feedback.',
        }));

        return;
    }

    render() {
        const visible = this.state.isVisible,
              fieldLabel = this.state.form.label,
              fieldId = this.state.form.fieldId;
            
        return (
            <form className="component" onSubmit={this.handleSubmit}>
                <h2>Feedback</h2>
                <h3>{ this.state.message}</h3>
                <button 
                    onClick={this.handleNoClick}
                    className={ visible ? "btn--no show":"btn--no hide"}
                    type="button" 
                    name="btn--no" 
                >
                    No
                </button>
                <button 
                    onClick={this.handleYesClick}
                    className={ visible ? "btn--yes show":"btn--yes hide"}
                    type="button" 
                    name="btn--no" 
                >
                    Yes
                </button>
                
                <fieldset 
                    className={visible ? "hide":"show"}
                >
                    <label 
                        htmlFor={fieldId}
                    >
                        {fieldLabel}
                    </label>
                    <textarea 
                        id={fieldId}
                    ></textarea>

                    <input 
                        type="submit" 
                        value="Send" 
                        className="btn btn--send"
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