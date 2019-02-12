import React, { Component } from 'react';
import './style.scss';

export default class RecommendedLinksDiscovery extends Component {
    constructor(props){
        super(props);

        this.state = {
            links: this.get_links(window.location.search.replace(/\?_q=/i, ''))
        }

        this.get_links = this.get_links.bind(this);
        this.get_link_keys = this.get_link_keys.bind(this);
        this.unique = this.unique.bind(this);
        this.remove_url_string_separators = this.remove_url_string_separators.bind(this);
    }

    get_links(str) {
        let links_to_show = [],
            unique_link_keys = [];
        if (!!str) {
            str = this.remove_url_string_separators(str);
            unique_link_keys = this.get_link_keys(str);

            unique_link_keys.forEach(i => links_to_show.push(links[i]));
            
            return links_to_show;
        }
        return false;
    };

    get_link_keys(str) {
        let link_keys = [];
        terms.forEach(i => {
            if (i.term.test(str)) {
                link_keys = link_keys.concat(i.related_links);
            }
        });

        return this.unique(link_keys);
    };

    unique(arr) {
        let arr_without_duplicates = [];
        arr.forEach(function (i) {
            if (arr_without_duplicates.indexOf(i) === -1) {
                arr_without_duplicates.push(i);
            }
        });
        return arr_without_duplicates;
    };

    remove_url_string_separators (str) {
        return str.replace(/\+/g, ' ');
    };

    render(){
        return(
            <ul className="searchList">
                {this.state.links.map(item => 
                    <li key={this.state.links.objectID} class="recommended-link">
                         <h3><a href={item.url}>{item.text}</a></h3>
                         <p>{item.description}</p>
                         <p><strong>Source: </strong>{item.source}</p>
                    </li>)
                }
            </ul>
        )
    }
}

const terms = [
    {
        term: /(birth|marriage|death)s?( (certificate|record)s?)?/i,
        related_links: ['general_register_office'],
        strings_to_match: ['birth','births','birth certificate','birth certificates','birth record','birth records','marriage','marriages','marriage certificate','marriage certificates','marriage record','marriage records', 'death','deaths','death certificate','death certificates','death record','death records'],
        objectID: 0
    }
];

const links = {
    general_register_office: {
        url: "https://www.gov.uk/general-register-office/",
        text: "Looking for a birth, death, or marriage certificate?",
        description: "We do not hold these documents: contact the General Register Office for records created after 1837. For earlier dates consult our Births, marriages and deaths research guides.",
        source: "External Websites / Research Guides",
        objectID: 0
    }

};