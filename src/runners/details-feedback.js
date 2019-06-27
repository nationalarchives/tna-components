import React from 'react';
import ReactDOM from 'react-dom';
import DetailsFeedbackWidget from '../../components/feedback/details_feedback_widget.react';

{
  const detailsPage = document.querySelector('.details-page'),
    path = window.location.pathname,
    url = window.location.href,
    detailsWrapperId = 'details-feedback-wrapper',
    regex = /\/details\/r\/(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
    regexDev = /http:\/\/localhost:3000\/details\/r/i,
    regexTest = /https:\/\/test.discovery.nationalarchives.gov.uk\/details\/r/i,
    regexLive = /https:\/\/discovery.nationalarchives.gov.uk\/details\/r/i,
    regexDevLive = /http:\/\/dev.discovery.nationalarchives.gov.uk\/details\/r/i,
    regexDevDiscovery = /http:\/\/localhost:81\/details\/r/i;

  if (
    url.match(regexDev) ||
    url.match(regexTest) ||
    url.match(regexDevDiscovery) ||
    url.match(regexDevLive) ||
    url.match(regexLive)
  ) {
    if (detailsPage && path.match(regex)) {
      if (detailsPage.contains(document.getElementById('page_wrap'))) {
        if (!document.getElementById(detailsWrapperId)) {
          const pageWrap = document.getElementById('page_wrap'),
            asideDom = `
              <aside id="feedback-widget-row">
                <div>
                  <div id=${detailsWrapperId}></div>
                </div>
              </aside>`;

          pageWrap.insertAdjacentHTML('beforeend', asideDom);

          ReactDOM.render(
            <DetailsFeedbackWidget />,
            document.getElementById(detailsWrapperId)
          );
        }
      }
    }
  }
}
