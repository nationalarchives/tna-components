import React from 'react';
import ReactDOM from 'react-dom';
import WTEGFeedbackWidget from '../../components/feedback/wteg_feedback_widget.react';

if(document.querySelector('.details-page')){
    const detailsPage = document.querySelector('.details-page');
    if(detailsPage.contains(document.getElementById('what-to-expect'))){
        if(!document.getElementById('what-to-expect-form')){
            const wtegWrapper = document.getElementById('what-to-expect');
            const wtegWrapperId = 'what-to-expect-form';
            const wtegFeedbackDiv = `<div id=${wtegWrapperId}></div>`;
            wtegWrapper.insertAdjacentHTML('beforeend', wtegFeedbackDiv);

            ReactDOM.render(
                <WTEGFeedbackWidget />,
                document.getElementById(wtegWrapperId)
            );
        }
    }
}
