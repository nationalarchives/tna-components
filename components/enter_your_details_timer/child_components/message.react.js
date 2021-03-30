import React from 'react';

const Message = (props) => {

    if (props.minutes >= 1) {
        return (
            <>
                <h2>Enter your details within <span>{props.minutes} minute{props.minutes > 1 ? 's' : ''}</span></h2>
                <p>If you do not complete the form by this time we will cancel your seat and you will need to start
                    the process
                    again.
                </p>
            </>
        )
    }

    if (props.minutes === 0) {
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
