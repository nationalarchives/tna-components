import React from 'react';
import ReactDOM from 'react-dom';
import WTEGFeedbackWidget from '../../components/feedback/wteg_feedback_widget.react';

if (document.querySelector('.details-page')) {
  const detailsPage = document.querySelector('.details-page');
  if (detailsPage.contains(document.getElementById('what-to-expect'))) {
    const wteID = document.getElementById('what-to-expect');

    if (!document.getElementById('what-to-expect-form')) {
      const wtegFormID = 'what-to-expect-form';
      const wtegDOM = `<div id=${wtegFormID}></div>`;

      wteID.insertAdjacentHTML('beforeend', wtegDOM);

      ReactDOM.render(
        <WTEGFeedbackWidget />,
        document.getElementById(wtegFormID)
      );
    }
  }
}
