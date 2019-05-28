import React from 'react';
import ReactDOM from 'react-dom';
import DetailsFeedbackWidget from '../../components/details_feedback/details_feedback_widget.react';

{
  const detailsPage = document.querySelector('.details-page'),
    path = window.location.pathname,
    regex = /\/details\/r\/(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
    regexDev = /http:\/\/localhost:3000\/details/r/i,
    regexTest = /https:\/\/test.discovery.nationalarchives.gov.uk/i,
    regexLive = /https:\/\/discovery.nationalarchives.gov.uk/i,
    regexDevLive = /http:\/\/dev.discovery.nationalarchives.gov.uk/i,
    regexDevDiscovery = /http:\/\/localhost:81/i;

  if (detailsPage && path.match(regex)) {
    if (detailsPage.contains(document.getElementById('page_wrap'))) {
      const pageWrap = document.getElementById('page_wrap');
      if(path.match(regexDev) || path.regexDevDiscovery || path.match(regexTest) || path.match(regexLive) || path.match(regexDevLive) ||path.match(regexDevDiscovery)) {
        if (!document.getElementById('details-feedback-wrapper')) {
           const asideDom = `
            <aside id="feedback-widget-row">
              <div>
                <div id="details-feedback-wrapper"></div>
              </div>
            </aside>`;
  
          pageWrap.insertAdjacentHTML('beforeend', asideDom);
  
          ReactDOM.render(
            <DetailsFeedbackWidget />,
            document.getElementById('details-feedback-wrapper')
          );
        }
      }
    }
  }
}
