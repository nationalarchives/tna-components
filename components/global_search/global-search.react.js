import React, {Component} from 'react';
import './style.scss';
import SearchOption from "./child_components/search_option/SearchOption";

class GlobalSearch extends Component {

    constructor(props) {
        super(props);

        this.show_search_options_ref = React.createRef();
        this.show_hide_mobile_ref = React.createRef();

        this.state = {

            show_search_options: false,
            show_mobile_search: false,

            active_search: {}, // This is assigned to the first option below

            search_selector: {
                label: 'Show search options',
                id: 'show_options',
            },

            component_label: 'Search our website or catalogue',
            search_query_legend: 'Enter search term',
            search_options: {
                group_name: 'search_type',
                select_type: 'Select a search type',
                options: [
                    {
                        label: 'Search our website',
                        id: 'website_search',
                        search_id: 'website_search_box',
                        url: 'https://www.nationalarchives.gov.uk/search/results'
                    },
                    {
                        label: 'Search our records',
                        id: 'discovery_search',
                        search_id: 'discovery_search_box',
                        url: 'https://discovery.nationalarchives.gov.uk/results/r'
                    }
                ]
            }
        };

        const {state} = this;
        state.active_search = state.search_options.options[0];

    }

    handle_search_selection = (e) => {
        if (e.target.type === 'radio') {
            let selection = this.state.search_options.options.find((i) => {
                return (e.target.id === i.id);
            });
            this.setState({active_search: selection});
        }
    }

    toggle_search_options = () => {
        this.setState({show_search_options: !this.state.show_search_options})
    }

    search_bar_focused = () => {
        this.show_search_options_ref.current.checked = false;
        this.setState({show_search_options: false});
    }

    get_select_search_type = () => {
       const {state, props, handle_search_selection} = this;

        return (
            <fieldset id="select-search-type" onChange={handle_search_selection}>
                <legend className="sr-only">{state.search_options.select_type}</legend>
                <SearchOption group_name={state.search_options.group_name}
                              options={state.search_options.options}
                              desktop={props.desktop}/>
            </fieldset>
        )
    }

    show_hide_mobile = () =>{
        this.setState({show_mobile_search: !this.state.show_mobile_search});
    }

    render() {

        const {
            state,
            props,
            show_hide_mobile,
            show_hide_mobile_ref,
            toggle_search_options,
            show_search_options_ref,
            get_select_search_type,
            search_bar_focused
            } = this;

        return (
            <div>
                {(!props.desktop) ?
                    <fieldset id="mobile-search-options">
                        <legend className="sr-only">Show search box</legend>
                        <input type="checkbox" id='show-hide-mobile'
                               aria-label='show-hide-mobile' className="sr-only"
                               onChange={show_hide_mobile}
                               ref={show_hide_mobile_ref}/>
                        <label htmlFor='show-hide-mobile' className="show-hide-mobile">
                            <span className="sr-only"> Show search box</span>
                        </label>
                    </fieldset>
                     : null }

                <form aria-label={state.component_label} role="search" aria-hidden={(!props.desktop && !state.show_mobile_search)}
                      action={state.active_search.url} className='global-search-js'>

                    {(props.desktop) ?
                        <fieldset id="search-options">
                            <legend className="sr-only">{state.search_selector.label}</legend>
                            <input type="checkbox" id={state.search_selector.id}
                                   aria-label={state.search_selector.label} className="sr-only"
                                   onChange={toggle_search_options}
                                   ref={show_search_options_ref}/>
                            <label htmlFor={state.search_selector.id} className="show-search-options">
                                <span className="sr-only"> {state.search_selector.label}</span>
                            </label>
                        </fieldset> : null}


                    {(state.show_search_options === true && props.desktop) ?
                        get_select_search_type() : null
                    }

                    <fieldset id="search-query">
                        <legend className="sr-only">{state.search_query_legend}</legend>
                        <input
                               id={state.active_search.search_id}
                               type="search" autoComplete="off" name="_q"
                               aria-label={state.active_search.label}
                               placeholder={state.active_search.label}
                               className='focusable-outline'
                               onFocus={search_bar_focused}/>
                        <label htmlFor={state.active_search.search_id}>
                            <span className="sr-only">{state.active_search.label}</span>
                        </label>
                        {(!props.desktop) ?
                            get_select_search_type() : null
                        }
                        <input type="submit" className='search-submit focusable-outline' value='Search'/>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default GlobalSearch;


