import React from 'react';
import ReactDOM from 'react-dom';
import EnterYourDetailsTimer from '../../components/enter_your_details_timer/enter_your_details_timer.react';

// This component should only render on the Enter Your Details page
// which can be identified by the presence of seconds_remaining

{

    const server_sent_seconds_exists = !!window.seconds_remaining,
        mount_node_exists = !!document.querySelector('#enter-your-details-timer');

    if (server_sent_seconds_exists && mount_node_exists) {
        ReactDOM.render(
            <EnterYourDetailsTimer seconds_remaining={window.seconds_remaining}/>,
            document.querySelector('#enter-your-details-timer')
        );
    }
}
