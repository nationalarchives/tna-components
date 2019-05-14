import React, { Component } from 'react';
import Fieldset from './child_components/fieldset/fieldset.react'
import './style.scss';

export default class DetailsFeedbackReact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            heading: 'Feedback',
            needs_improvement: null
        };

        this.set_needs_improvement = this.set_needs_improvement.bind(this);
    }

    set_needs_improvement = (e) => {
        if (e.target.value === 'Yes') {
            this.setState({ needs_improvement: true });
        } else if (e.target.value === 'No') {
            this.setState({ needs_improvement: false });
        }
    };

    render() {

        const { needs_improvement } = this.state;

        return (
            <React.Fragment>
                <h2>{this.state.heading}</h2>
                <form action="">
                    <Fieldset
                        show={needs_improvement === null}
                        onClick={(e) => this.set_can_be_improved(e)}
                        legend="Could this page be improved?">
                        <input type="button" value="Yes"/>
                        <input type="button" value="No"/>
                    </Fieldset>
                    <Fieldset
                        show={needs_improvement === true}
                        legend="Please let us know why you are dissatisfied">
                    </Fieldset>
                    <Fieldset
                        show={needs_improvement === false}
                        legend="Please tell us more about what works">
                    </Fieldset>
                </form>
            </React.Fragment>
        );
    }
}