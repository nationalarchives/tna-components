import React from 'react';
import ReactDOM from 'react-dom';
import WTEGModal from '../../components/what_to_expect_guide_modal/wtegModel/wtegModal.react';
{
  if (window.innerWidth >= 768) {
    if (document.querySelector('.details-page')) {
      const detailsPage = document.querySelector('.details-page');
      if (detailsPage.contains(document.getElementById('wteg-image-wrapper'))) {
        const wtegWrapper = document.getElementById('wteg-image-wrapper');
        if (wtegWrapper.querySelector('img.what-to-expect-image')) {
          const wtegImg = wtegWrapper.querySelector('img.what-to-expect-image');
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
