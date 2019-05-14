import React, { Component } from 'react';

export default class DetailsFeedbackReact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            heading: 'Feedback'
        };

    }

    render() {
        return (
            <React.Fragment>
                <h2>{this.state.heading}</h2>
            </React.Fragment>
        );
    }
}