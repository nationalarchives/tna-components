import React from 'react';
import ReactDOM from 'react-dom';
import WTEGFeedbackWidget from '../../components/what_to_expect_guide_feedback/what-to-expect-guide-feedback.react';

{
  const detailsPage = document.querySelector('.details-page'),
    wteID = document.getElementById('what-to-expect'),
    wteFrom = document.getElementById('what-to-expect-form');

  if (detailsPage) {
    if (detailsPage.contains(wteID)) {
      if (!wteFrom) {
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
}
