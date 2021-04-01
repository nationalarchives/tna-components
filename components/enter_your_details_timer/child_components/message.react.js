import React from 'react';

const Message = (props) => {

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
                <h3>The time limit to complete this page has expired</h3>
                <small>Select another date.</small>
            </>
        )
    }

};

export default Message;
