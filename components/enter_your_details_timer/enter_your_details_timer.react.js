import React, { useState, useEffect } from "react";
import Message from "./child_components/message.react";
import "./style.scss";

function EnterYourDetailsTimer(props) {

    const [seconds, setSeconds] = useState(props.seconds_remaining);

    useEffect(() => {
        const interval = setInterval(() => {

            setSeconds(seconds => {
                if (seconds > 0) {
                    return seconds - 1;
                }
                clearInterval(interval);
                return seconds;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div role="timer" aria-live="polite" id="enter-your-details-timer" aria-atomic="true">
                <Message seconds_remaining={seconds}/>
            </div>
        </>
    );
}

export default EnterYourDetailsTimer;

