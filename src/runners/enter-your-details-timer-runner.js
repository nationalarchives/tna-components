import React from 'react';
import ReactDOM from 'react-dom';
import EnterYourDetailsTimer from '../../components/enter_your_details_timer/enter_your_details_timer.react';


{
    if (document.getElementsByClassName('form-error').length === 0) {
        ReactDOM.render(
            <EnterYourDetailsTimer/>,
            document.querySelector('#enter-your-details-timer')
        );
    } else {
        console.log(`Elements with class ".form-error" present so timer component not mounted. See enter-your-details-timer-runner.js`);
    }
}
