import React, { useState, useEffect } from "react";
import Message from "./child_components/message.react";
import "./style.scss";

function EnterYourDetailsTimer(props) {

    const [minutes, setMinutes] = useState(20);

    const classes = `prompt-grey full-width ${minutes < 10 ? 'timer-low' : ''}`;

    useEffect(() => {
        const interval = setInterval(() => {

            setMinutes(minutes => {
                if (minutes > 0) {
                    return minutes - 1
                }
                clearInterval(interval);
                return minutes;
            });
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className={classes} aria-live="polite" id="enter-your-details-timer">
                <Message minutes={minutes}/>
            </div>
        </>
    );
}

export default EnterYourDetailsTimer;

