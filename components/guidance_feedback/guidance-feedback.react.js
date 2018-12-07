import React, { Component } from 'react';
import posed from 'react-pose';
import { format } from 'url';
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
        
        // Bind methods to the component construtor
        this.buttonClick = this.buttonClick.bind(this);
        
        this.state = {
            isVisible: false,
            form:{
                label:'Any comments on your experience?',
                firldId:'guidance-feedback--component--field-yes'
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
                isVisible: true,
                form: {
                    label:'What did you expect to find?',
                    firldId:'guidance-feedback--component--field-no'
                }
            });
        } 
        
        if(e.target.name === 'btn--yes') {
            this.setState({
                isVisible: true,
                form:{
                    label:'Any comments on your experience?',
                    firldId:'guidance-feedback--component--field-yes'
                }
            });
        }
    }

    render() {
        return (
            <div id="guidance-feedback" className="component">
                <h2>Feedback</h2>
                <h3>Did you find the guidance you needed?</h3>

                <Posed pose={ this.state.isVisible ? 'hidden' : 'visible' }>
                    <button type="button" name="btn--yes" className="btn--yes">YES</button>
                    <button type="button" name="btn--no" className="btn--no">NO</button>
                </Posed>
                
                <Posed pose={ this.state.isVisible ? 'visible' : 'hidden' }>
                    <form>
                        <fieldset>
                            <label htmlFor={this.state.form.firldId}>{this.state.form.label}</label>
                            <textarea id={this.state.form.firldId}></textarea>
                        </fieldset>
                        <input type="submit" value="Send" />
                        <input type="reset" value="Cancel" />
                    </form>
                </Posed>
            </div>
        );
    }
}