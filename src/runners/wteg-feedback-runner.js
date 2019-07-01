import React from 'react';
import ReactDOM from 'react-dom';
import WTEGFeedbackWidget from '../../components/feedback/wteg_feedback_widget.react';

{
  const url = window.location.href,
    devLocal = 'http://localhost:3000/what-to-expect-guide',
    regexTest = /https:\/\/test.discovery.nationalarchives.gov.uk\/details\/r/i,
    regexLive = /https:\/\/discovery.nationalarchives.gov.uk\/details\/r/i,
    regexDev = /http:\/\/dev.discovery.nationalarchives.gov.uk\/details\/r/i,
    regexDevDiscovery = /http:\/\/localhost:81\/details\/r/i;
  if (
    url.match(devLocal) ||
    url.match(regexTest) ||
    url.match(regexDevDiscovery) ||
    url.match(regexDev) ||
    url.match(regexLive)
  ) {
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
  }
}
