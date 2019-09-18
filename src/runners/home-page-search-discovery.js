import React from 'react';
import ReactDOM from 'react-dom';
import HomePageSearchDiscovery from '../../components/home_page_search_discovery/home_page_search_discovery.react';

{
	const wrapper = document.querySelector('.home #page_wrap .search-banner'),
		url = window.location.href,
		regexDev = /http:\/\/localhost:3000\/home-page-search-discovery/i,
		regexTest = /https:\/\/test.discovery.nationalarchives.gov.uk/i,
		regexDevLive = /http:\/\/dev.discovery.nationalarchives.gov.uk/i,
		regexDevDiscovery = /http:\/\/localhost:81/i,
		regexLive = /https:\/\/discovery.nationalarchives.gov.uk/;
	if (
		url.match(regexLive) ||
		url.match(regexDev) ||
		(url.match(regexTest) ||
			url.match(regexDevDiscovery) ||
			(url.match(regexDevLive) && wrapper))
	) {
		if (!document.querySelector('.homepage-search-ui')) {
			let section = document.createElement('section');
			wrapper.appendChild(section);
			section.setAttribute('class', 'homepage-search-ui');
			wrapper.append(section);
		}

		ReactDOM.render(
			<HomePageSearchDiscovery />,
			document.querySelector('.homepage-search-ui')
		);
	}
}
