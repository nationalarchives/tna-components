import React from 'react';
import ReactDOM from 'react-dom';
import GlobalSearch from '../../components/global_search/global-search.react';

// import component


function renderIfExists(id, desktop, defaultFormDataIndex) {

	if(document.getElementById(id)) {
		ReactDOM.render(
			<GlobalSearch desktop={desktop} defaultFormDataIndex={defaultFormDataIndex}
			/>,
			document.getElementById(id)
		)
	}
}


// Non-discovery runner

renderIfExists("global-search-desktop-component", true, 0);
renderIfExists("global-search-mobile-component", false, 0);


// Discovery runner

renderIfExists("global-search-desktop-component-discovery", true, 1);
renderIfExists("global-search-mobile-component-discovery", false, 1);
