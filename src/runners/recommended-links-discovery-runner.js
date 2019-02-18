import React from 'react';
import ReactDOM from 'react-dom';
import RecommendedLinks from '../../components/recommended_links/recommended_links.react';

// Recommended Links Discovery
// Define the block scope

{
  const wrapper = document.querySelector('.search-results .generic-tabs'),
    url = window.location.href,
    regex = /\?_q=/g;

  if (url.match(regex) && wrapper) {
    if (!document.getElementById('recommended-links-discovery')) {
      let div = document.createElement('div');
      div.id = 'recommended-links-discovery';

      if (wrapper) {
        wrapper.appendChild(div);
      }

      ReactDOM.render(
        <RecommendedLinks />,
        document.getElementById('recommended-links-discovery')
      );
    }
  }
}
