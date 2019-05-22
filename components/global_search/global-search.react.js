import React, {Component} from 'react';
import './style.scss';
import SearchOption from "./child_components/search_option/SearchOption";

class GlobalSearch extends Component {

    constructor(props) {
        super(props);

        this.handle_search_selection = this.handle_search_selection.bind(this);
        this.toggle_search_options = this.toggle_search_options.bind(this);
        this.search_bar_focused = this.search_bar_focused.bind(this);
        this.get_select_search_type = this.get_select_search_type.bind(this);
        this.show_hide_mobile = this.show_hide_mobile.bind(this);

        this.show_search_options_ref = React.createRef();
        this.show_hide_mobile_ref = React.createRef();

        this.state = {

            show_search_options: true,
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
                        label: 'Search the website',
                        id: 'website_search',
                        url: 'http://www.nationalarchives.gov.uk/search/results'
                    },
                    {
                        label: 'Search Discovery, our catalogue',
                        id: 'discovery_search',
                        url: 'http://discovery.nationalarchives.gov.uk/results/r'
                    }
                ]
            }
        };

        this.state.active_search = this.state.search_options.options[0];

    }

    handle_search_selection(e) {
        if (e.target.type === 'radio') {
            let selection = this.state.search_options.options.find((i) => {
                return (e.target.id === i.id);
            });
            this.setState({active_search: selection});
        }
    }

    toggle_search_options() {
        this.setState({show_search_options: !this.state.show_search_options})
    }

    search_bar_focused() {
        this.show_search_options_ref.current.checked = false;
        this.setState({show_search_options: false});
    }

    get_select_search_type() {
        return (
            <fieldset id="select-search-type" onChange={this.handle_search_selection}>
                <legend className="sr-only">{this.state.search_options.select_type}</legend>
                <SearchOption group_name={this.state.search_options.group_name}
                              options={this.state.search_options.options}
                              desktop={this.props.desktop}/>
            </fieldset>
        )
    }

    show_hide_mobile(){
        this.setState({show_mobile_search: !this.state.show_mobile_search});
    }

    render() {
        return (
            <div>

                {(!this.props.desktop) ?
                    <fieldset id="mobile-search-options">
                        <legend className="sr-only">Show search box</legend>
                        <input type="checkbox" id='show-hide-mobile'
                               aria-label='show-hide-mobile' className="sr-only"
                               onChange={this.show_hide_mobile}
                               ref={this.show_hide_mobile_ref}/>
                        <label htmlFor='show-hide-mobile' className="show-hide-mobile">
                            <span className="sr-only"> Show search box</span>
                        </label>
                    </fieldset>
                     : null }

                <form aria-labelledby="global_search_label" role="search" aria-hidden={(!this.props.desktop && !this.state.show_mobile_search)}
                      action={this.state.active_search.url} className='global-search-js'>

                    {(this.props.desktop) ?
                        <fieldset id="search-options">
                            <legend className="sr-only">{this.state.search_selector.label}</legend>
                            <input type="checkbox" id={this.state.search_selector.id}
                                   aria-label={this.state.search_selector.label} className="sr-only"
                                   onChange={this.toggle_search_options}
                                   ref={this.show_search_options_ref}/>
                            <label htmlFor={this.state.search_selector.id} className="show-search-options">
                                <span className="sr-only"> {this.state.search_selector.label}</span>
                            </label>
                        </fieldset> : null}


                    {(this.state.show_search_options === true && this.props.desktop) ?
                        this.get_select_search_type() : null
                    }

                    <fieldset id="search-query">
                        <legend className="sr-only">{this.state.search_query_legend}</legend>
                        <input type="search" autoComplete="off" role="search" name="_q"
                               aria-label={this.state.active_search.label}
                               placeholder={this.state.active_search.label}
                               className='focusable-outline'
                               onFocus={this.search_bar_focused}/>
                        <input type="submit" className='search-submit focusable-outline'/>
                    </fieldset>

                    {(this.state.show_search_options === true && !this.props.desktop) ?
                        this.get_select_search_type() : null
                    }
                </form>
            </div>
        );
    }
}

export default GlobalSearch;


