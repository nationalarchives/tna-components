import React from 'react';
import ReactDOM from 'react-dom';
import DetailsFeedback from '../../components/details_feedback_component/details-feedback.react';

{
    const url = window.location.href;
    const wrapper = document.querySelector('.details-page');

    const regex = /details\/r/g;

    if ((url.match(regex) && wrapper) || wrapperIndepth) {
        if (!document.getElementById('details-feedback-react')) {
            let div = document.createElement('div');
            div.id = 'details-feedback-react';

            if (wrapper) {
                wrapper.appendChild(div);
            }

            ReactDOM.render(
                <DetailsFeedback/>,
                document.getElementById('details-feedback-react')
            );
        }
    }
}
