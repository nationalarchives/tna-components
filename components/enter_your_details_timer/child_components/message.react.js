import React, { useState } from 'react';

const Message = (props) => {

    const minutes = useState(Math.floor(props.seconds / 60));

    if (props.seconds >= 60) {
        return (
            <>
                <h3>Enter your details
                    within
                </h3>
                <span id="timer">{ Math.floor(props.seconds / 60) } minute{ Math.floor(props.seconds / 60) > 1 ? 's' : ''}</span>
                <small>If you do not complete the form by this time we will cancel your seat and you will need to start
                    the process
                    again.
                </small>
            </>
        )
    }

    if (props.seconds <= 59 && props.seconds > 0) {
        return (
            <>
                <h3>Enter your details within</h3>
                <span id="timer">{props.seconds} second{props.seconds > 1 ? 's' : ''}</span>
                <small>If you do not complete the form by this time we will cancel your seat and you will need to start
                    the process
                    again.
                </small>
            </>
        )
    }

    if (props.seconds === 0) {
        return (
            <>
                <h3>Time limit exceeded</h3>
                <small>The time limit to enter your details has been exceeded. Return to the availability page to
                    select another date.</small>
            </>
        )
    }

};

export default Message;
