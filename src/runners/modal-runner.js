import React from 'react';
import ReactDOM from 'react-dom';
import WTEGModal from '../../components/modal/wtegModel/wtegModal.react';
{
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
    detailsPage = document.querySelector('.details-page');

  if (!isMobile) {
    if (detailsPage.contains(document.getElementById('wteg-image-wrapper'))) {
      if (document.getElementById('wteg-image-wrapper')) {
        const wtegWrapper = document.getElementById('wteg-image-wrapper');
        if (wtegWrapper.querySelector('img.what-to-expect-image')) {
          const wtegImg = wtegWrapper.querySelector('img.what-to-expect-image');
          const imgSrc = wtegImg.src;
          const imgClass = wtegImg.getAttribute('class');
          const imgAlt = wtegImg.getAttribute('alt');

          ReactDOM.render(
            <WTEGModal src={imgSrc} alt={imgAlt} className={imgClass} />,
            wtegWrapper
          );
        }
      }
    }
  }
}
