import React from 'react';
import ReactDOM from 'react-dom';
import WTEGFeedbackWidget from '../../components/feedback/wteg_feedback_widget.react';

{
	const detailsPage = document.querySelector('.details-page'),
		path = window.location.pathname,
		url = window.location.href,
		wtegWrapperId = 'what-to-expect-form',
		regex = /\/details\/r\/(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
		regexDev = /http:\/\/localhost:3000\/details\/r/i,
		regexTest = /https:\/\/test.discovery.nationalarchives.gov.uk\/details\/r/i,
		regexLive = /https:\/\/discovery.nationalarchives.gov.uk\/details\/r/i,
		regexDevLive = /http:\/\/dev.discovery.nationalarchives.gov.uk\/details\/r/i,
		regexDevDiscovery = /http:\/\/localhost:81\/details\/r/i,
		test = '/what-to-expect-guide';

	if (
		url.match(regexDev) ||
		url.match(regexTest) ||
		url.match(regexDevDiscovery) ||
		url.match(regexDevLive) ||
		url.match(regexLive)  ||
		url.match(test)
	) {
		if (detailsPage && path.match(test)) {
			if (detailsPage.contains(document.getElementById('page_wrap'))) {
				if (!document.getElementById(wtegWrapperId)) {
					const pageWrap = document.getElementById('page_wrap'),
						asideDom = `
						  <aside id="feedback-widget-row">
							<div>
							  <div id=${wtegWrapperId}></div>
							</div>
						  </aside>`;

					pageWrap.insertAdjacentHTML('beforeend', asideDom);

					ReactDOM.render(
						<WTEGFeedbackWidget id="what-to-expect-form" />,
						document.getElementById(wtegWrapperId)
					);
				}
			}
		}
	}
}
