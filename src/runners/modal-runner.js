import React from 'react';
import ReactDOM from 'react-dom';
import WTEGModal from '../../components/modal/wtegModel/wtegModal.react';
{
  if (window.innerWidth >= 768) {
    const url = window.location.href,
      devEnv = 'http://localhost:3000/modal',
      regexTest = /https:\/\/test.discovery.nationalarchives.gov.uk\/details\/r/i,
      regexLive = /https:\/\/discovery.nationalarchives.gov.uk\/details\/r/i,
      regexDevLive = /http:\/\/dev.discovery.nationalarchives.gov.uk\/details\/r/i,
      regexDevDiscovery = /http:\/\/localhost:81\/details\/r/i;

    if (
      url.match(devEnv) ||
      url.match(regexTest) ||
      url.match(regexDevDiscovery) ||
      url.match(regexDevLive) ||
      url.match(regexLive)
    ) {
      if (document.querySelector('.details-page')) {
        const detailsPage = document.querySelector('.details-page');
        if (
          detailsPage.contains(document.getElementById('wteg-image-wrapper'))
        ) {
          const wtegWrapper = document.getElementById('wteg-image-wrapper');
          if (wtegWrapper.querySelector('img.what-to-expect-image')) {
            const wtegImg = wtegWrapper.querySelector(
              'img.what-to-expect-image'
            );
            const imgSrc = wtegImg.src;
            const imgClass = wtegImg.getAttribute('class');
            const imgAlt = wtegImg.getAttribute('alt');
            const imgDsc = wtegWrapper.querySelector('span').innerText;

            ReactDOM.render(
              <WTEGModal
                src={imgSrc}
                alt={imgAlt}
                className={imgClass}
                imgDsc={imgDsc}
              />,
              wtegWrapper
            );
          }
        }
      }
    }
  }
}
