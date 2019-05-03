import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import GlobalSearch from "./global-search.react";

const test_renderer = TestRenderer.create(<GlobalSearch/>);
const test_instance = test_renderer.root;
const instance = test_renderer.getInstance();

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GlobalSearch/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('has the correct props', () => {
    expect(instance.state.search_options.select_type).toBe('Select a search type');
});

it('renders a form with the correct className and action', () => {
    const rendered_component = test_renderer.toJSON();
    expect(rendered_component.type).toBe('form');
    expect(rendered_component.props.className).toBe('global-search-js');
    expect(rendered_component.props.role).toBe('search');
    expect(rendered_component.props.action).toBe('http://www.nationalarchives.gov.uk/search/results');
});

it(`contains a 'select-search-type' fieldset and legend with the correct text`, () => {
    const fieldset = test_instance.findByProps({id: 'select-search-type'});
    expect(fieldset.type).toBe('fieldset');

    const legend = fieldset.findByType('legend');
    expect(legend.type).toBe('legend');
    expect(legend.children[0]).toBe(instance.state.search_options.select_type);
});

it('contains a radio button and label for website search', () => {
    const website_search_radio = test_instance.findByProps({id: 'website_search'});
    expect(website_search_radio.type).toBe('input');

    const website_search_label = test_instance.findByProps({htmlFor: 'website_search'});
    expect(website_search_label.type).toBe('label');
});

it('contains a radio button and label for discovery search', () => {
    const discovery_search_radio = test_instance.findByProps({id: 'discovery_search'});
    expect(discovery_search_radio.type).toBe('input');

    const discovery_search_label = test_instance.findByProps({htmlFor: 'discovery_search'});
    expect(discovery_search_label.type).toBe('label');
});

it('changes the form action to Discovery when that option is selected', () => {

    // Test that the component is updated in response to a change event
    // Have posted a question on Stack Overflow:
    // https://stackoverflow.com/questions/53026675/
});

it('updates the visibility of search options in response to change to the checkbox', () => {

    // Test that the component is updated in response to a change event
    // Have posted a question on Stack Overflow:
    // https://stackoverflow.com/questions/53026675/
});

it(`contains a 'search-query' fieldset and legend with the correct text`, () => {
    const fieldset = test_instance.findByProps({id: 'search-query'});
    expect(fieldset.type).toBe('fieldset');

    const legend = fieldset.findByType('legend');
    expect(legend.type).toBe('legend');
    expect(legend.children[0]).toBe(instance.state.search_query_legend);
});

it(`contains a labelled search element with the correct properties`, () => {
    const fieldset = test_instance.findByProps({id: 'search-query'});
    const search_field = fieldset.findByProps({role: 'search'});
    expect(search_field.props.type).toBe('search'); // This tests the 'type' attribute
    expect(search_field.type).toBe('input');
    expect(search_field.props['aria-label']).toBe(instance.state.active_search.label);
});

it(`contains a label that allows the user to view options for changing search destination`, () => {
    const fieldset = test_instance.findByProps({id: 'search-options'});
    expect(fieldset.type).toBe('fieldset');

    const legend = fieldset.findByType('legend');
    expect(legend.type).toBe('legend');
    expect(legend.children[0]).toBe(instance.state.search_selector.label);

    const checkbox = fieldset.findByType('input');
    expect(checkbox.props.id).toBe(instance.state.search_selector.id);
    expect(checkbox.props.type).toBe('checkbox');
    expect(checkbox.props['aria-label']).toBe(instance.state.search_selector.label);

    const label = fieldset.findByType('label');
    expect(label.props.htmlFor).toBe(instance.state.search_selector.id);

    const span = label.findByType('span');
    expect(span.type).toBe('span');
    expect(span.children[1]).toBe(instance.state.search_selector.label);

});



