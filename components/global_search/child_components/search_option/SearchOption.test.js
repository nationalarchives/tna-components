import React from 'react';
import ReactDOM from 'react-dom';
import SearchOption from './SearchOption';

const search_options = {
    group_name: 'search_type',
    options: [
        {
            label: 'Search Discovery',
            id: 'discovery_search'
        },
        {
            label: 'Search the website',
            id: 'website_search'
        }
    ]
};


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchOption group_name={search_options.group_name} options={search_options.options}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});






