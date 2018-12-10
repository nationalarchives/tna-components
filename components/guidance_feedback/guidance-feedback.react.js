import React, { Component } from 'react';
import { format } from 'url';
import './style.scss';


export default class GuidanceFeedback extends Component {
    
    constructor(props){
        super(props);
        
        // Bind methods to the class component construtor
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.state = {
            disabled: '',
            isBtnVisible: 'show',
            isFormVisible:'hide',
            form:{
                label:'Any comments on your experience?',
                fieldId:'guidance-feedback--component--field-yes'
            },
            message: 'Did you find the guidance you needed?',
        }
    }

    componentDidMount () {
        document.querySelectorAll('button[type="button"]').forEach((button) => {
            button.addEventListener('click', this.handleButtonClick, false);
        });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ 
            message: 'Thank you for your feedback.',
            isFormVisible: 'hide'
        });

        return;
    }

    handleButtonClick(e){
        if(e.target.name === 'btn--no') {
            this.setState({
                isBtnVisible: 'hide',
                isFormVisible:'show',
                form: {
                    label:'What did you expect to find?',
                    fieldId:'guidance-feedback--component--field-no'
                }
            });
        } else  {
            this.setState({
                isBtnVisible: 'hide',
                isFormVisible:'show',
                form:{
                    label:'Any comments on your experience?',
                    fieldId:'guidance-feedback--component--field-yes'
                }
            });
        }
    }

    render() {
        return (
            <div>
                <h2>Feedback</h2>
                <h3>{ this.state.message}</h3>
                
                <div className = { this.state.isBtnVisible }>
                    <button type="button" name="btn--no" className="btn--no">No</button>
                    <button type="button" name="btn--yes" className="btn--yes">Yes</button>
                </div>
                <div className = { this.state.isFormVisible }>
                    <form onSubmit={this.handleSubmit}>
                        <fieldset>
                            <label htmlFor={this.state.form.fieldId}>{this.state.form.label}</label>
                            <textarea id={this.state.form.fieldId}></textarea>

                            <input type="submit" value="Send" className="btn btn--send"/>
                            <input type="reset" value="Cancel" className="btn btn--cancel" />
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}