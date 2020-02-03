import React from 'react';
import ReactDOM from 'react-dom';
import GlobalSearch from '../../components/global_search/global-search.react';

// import component

ReactDOM.render(
	<GlobalSearch desktop={true}/>,
	document.getElementById('global-search-desktop-component'),
);

ReactDOM.render(
	<GlobalSearch desktop={false}/>,
	document.getElementById('global-search-mobile-component'),
);