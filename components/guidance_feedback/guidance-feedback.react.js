import React, { Component } from 'react';
import { format } from 'url';

export default class GuidanceFeedback extends Component {
    constructor(props){
        super(props);

        this.state = {
            class:'hide'
        }
    }


    render() {
        return(
            <form id="guidance-feedback">
                <fieldset>
                    <button type="button" name="guidance-feedback-yes" id="guidance-feedback-yes">YES</button>
                    <button type="button" name="guidance-feedback-no" id="guidance-feedback-no">No</button>
                </fieldset>
                <fieldset>
                    <textarea>YES</textarea>
                </fieldset>
                <fieldset>
                    <textarea>NO</textarea>
                </fieldset>
                <input type="submit" value="Send" />
                <input type="reset" value="Cancel" />
            </form>
        );
    }
}