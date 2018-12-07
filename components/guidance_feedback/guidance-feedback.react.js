import React, { Component } from 'react';
import posed from 'react-pose';
import { format } from 'url';
import { IoIosCheckbox } from 'react-icons/io';
import './style.scss'

const Posed = posed.div({
    hidden: { 
        opacity: 0 
    },
    visible: { 
        opacity: 1
    },

});

export default class GuidanceFeedback extends Component {
    
    constructor(props){
        super(props);
        
        // Bind methods to the class component construtor
        this.buttonClick = this.buttonClick.bind(this);
        
        this.state = {
            disabled: '',
            class: 'hide',
            isVisible: false,
            form:{
                label:'Any comments on your experience?',
                fieldId:'guidance-feedback--component--field-yes'
            }
        }
    }

    componentDidMount () {
        document.querySelectorAll('button[type="button"]').forEach((button) => {
            button.addEventListener('click', this.buttonClick, false);
        });
    }
    
    buttonClick(e){
        if(e.target.name === 'btn--no') {
            this.setState({
                class: 'show',
                isVisible: true,
                form: {
                    label:'What did you expect to find?',
                    fieldId:'guidance-feedback--component--field-no'
                }
            });
        } else  {
            this.setState({
                class: 'show',
                isVisible: true,
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
                <h3>Did you find the guidance you needed?</h3>
                
                <Posed className={this.state.isVisible ? 'hide' : 'show' } pose={ this.state.isVisible ? 'hidden' : 'visible' }>
                    <button type="button" name="btn--no" className="btn--no">No</button>
                    <button type="button" name="btn--yes" className="btn--yes">Yes</button>
                </Posed>
                
                <Posed pose={ this.state.isVisible ? 'visible' : 'hidden' }>
                    <form className={this.state.class}>
                        <fieldset>
                            <label htmlFor={this.state.form.fieldId}>{this.state.form.label}</label>
                            <textarea id={this.state.form.fieldId}></textarea>
                        </fieldset>
                        <input type="submit" value="Send" />
                        <input type="reset" value="Cancel" />
                    </form>
                </Posed>
            </div>
        );
    }
}