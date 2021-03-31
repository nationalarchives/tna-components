import React, { useState } from 'react';

const Message = (props) => {

    const minutes = useState(Math.floor(props.seconds / 60));

    if (props.seconds >= 60) {
        return (
            <>
                <h2>Enter your details
                    within <span>{ Math.floor(props.seconds / 60) } minute{ Math.floor(props.seconds / 60) > 1 ? 's' : ''}</span>
                </h2>
                <p>If you do not complete the form by this time we will cancel your seat and you will need to start
                    the process
                    again.
                </p>
            </>
        )
    }

    if (props.seconds <= 59 && props.seconds > 0) {
        return (
            <>
                <h2>Enter your details within <span>{props.seconds} second{props.seconds > 1 ? 's' : ''}</span></h2>
                <p>If you do not complete the form by this time we will cancel your seat and you will need to start
                    the process
                    again.
                </p>
            </>
        )
    }

    if (props.seconds === 0) {
        return (
            <>
                <h2>Time limit exceeded</h2>
                <p>The time limit to enter your details has been exceeded. Return to the availability page to
                    select another date.</p>
            </>
        )
    }

};

export default Message;
