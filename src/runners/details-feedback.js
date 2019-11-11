import React from 'react';
import ReactDOM from 'react-dom';
import DetailsFeedbackWidget from '../../components/details_feedback/details_feedback_widget.react';

// Define the block scoping
{
  const detailsPage = document.querySelector('.details-page #page_wrap'),
    detailsWrapperId = document.querySelector('#details-feedback-wrapper'),
    path = window.location.pathname,
    regex = /\/details\/r.*\/([\w\-])+/,
    asideDOM = `
      <aside id="feedback-widget-row">
        <div>
          <div id='details-feedback-wrapper'></div>
        </div>
      </aside>`;

  if (detailsPage && path.match(regex)) {
    if (!detailsWrapperId) {
      detailsPage.insertAdjacentHTML('beforeend', asideDOM);
    }
    ReactDOM.render(
      <DetailsFeedbackWidget />,
      document.querySelector('#details-feedback-wrapper')
    );
  }
}
