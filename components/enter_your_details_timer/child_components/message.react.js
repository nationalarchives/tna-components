import React, { useState } from 'react';

const Message = (props) => {

    const [minutes, setMinutes] = useState(Math.ceil(props.seconds_remaining / 60));

    if (props.seconds_remaining >= 60) {
        return (
            <>
                <h3>Enter your details
                    within
                </h3>
                <span id="timer">{ Math.ceil(props.seconds_remaining / 60) } minute{ Math.ceil(props.seconds_remaining / 60) > 1 ? 's' : ''}</span>
                <p>If you do not complete the form in this time we will cancel your seat and you will need to start
                    the process
                    again.
                </p>
            </>
        )
    }

    if (props.seconds_remaining <= 59 && props.seconds_remaining > 0) {
        return (
            <>
                <h3>Enter your details within</h3>
                <span id="timer">{props.seconds_remaining} second{props.seconds_remaining > 1 ? 's' : ''}</span>
                <p>If you do not complete the form in this time we will cancel your seat and you will need to start
                    the process
                    again.
                </p>
            </>
        )
    }

    if (props.seconds_remaining === 0) {
        return (
            <>
                <h3>Your booking has timed out</h3>
                <p>Choose a date of visit again.</p>
            </>
        )
    }

};

export default Message;
