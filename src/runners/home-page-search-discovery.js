import React from 'react';
import ReactDOM from 'react-dom';
import HomePageSearchDiscovery from '../../components/home_page_search_discovery/home_page_search_discovery.react';

{
  const wrapper = document.querySelector('.home #page_wrap .search-banner'),
    url = window.location.href,
    regexDev = /http:\/\/localhost:3000\/home-page-search-discovery/i,
    regexTest = /https:\/\/test.discovery.nationalarchives.gov.uk/i,
    regexLive = /https:\/\/discovery.nationalarchives.gov.uk/i,
    regexDevLive = /http:\/\/dev.discovery.nationalarchives.gov.uk/i,
    regexDevDiscovery = /http:\/\/localhost:81/i;

  if (
    url.match(regexDev) ||
    (url.match(regexLive) ||
      url.match(regexDevDiscovery) ||
      (url.match(regexDevLive) && wrapper))
  ) {
    if (!document.querySelector('.primary-search-box')) {
      let section = document.createElement('section');
      section.className = 'primary-search-box';

      wrapper.appendChild(section);
    }
    ReactDOM.render(
      <HomePageSearchDiscovery />,
      document.querySelector('.primary-search-box')
    );
  }
}
