import React, { Component } from 'react';
import './style.scss';

export default class RecommendedLinks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: this.getLinks(window.location.search.replace(/\?_q=/i, ''))
    };

    this.getLinks = this.getLinks.bind(this);
    this.getLinkKeys = this.getLinkKeys.bind(this);
    this.unique = this.unique.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.removeUrlStringSeparators = this.removeUrlStringSeparators.bind(this);
  }

  getLinks(str) {
    let links_to_show = [],
      unique_link_keys = [];

    if (str === '') str = ' ';

    if (!!str) {
      str = this.removeUrlStringSeparators(str);
      unique_link_keys = this.getLinkKeys(str);

      unique_link_keys.forEach(i => links_to_show.push(links[i]));
      return links_to_show;
    }
    return false;
  }

  getLinkKeys(str) {
    let link_keys = [];
    terms.forEach(i => {
      if (i.term.test(str)) {
        link_keys = link_keys.concat(i.related_links);
      }
    });

    return this.unique(link_keys);
  }

  unique(arr) {
    let arr_without_duplicates = [];
    arr.forEach(function(i) {
      if (arr_without_duplicates.indexOf(i) === -1) {
        arr_without_duplicates.push(i);
      }
    });
    return arr_without_duplicates;
  }

  removeUrlStringSeparators(str) {
    return str.replace(/\+/g, ' ');
  }

  // Render description conditionally
  renderDescription(obj) {
    if (obj.objectID === 0) {
      const [descOne, descTwo, descThree, descFour] = obj.description;
      const [gtmOne, gtmTwo] = obj.dataGTM;
      return (
        <React.Fragment>
          {descOne}{' '}
          <a data-gtm={gtmOne} href={obj.url}>
            {descThree}
          </a>{' '}
          {descTwo}{' '}
          <a data-gtm={gtmTwo} href={obj.urlTwo}>
            {descFour}
          </a>
          .
        </React.Fragment>
      );
    }
    return obj.description;
  }

  render() {
    return (
      <ul className="searchList">
        {this.state.links.map(item => (
          <li key={this.state.links.objectID} class="recommended-link">
            <h3>{item.text}</h3>
            <p>{this.renderDescription(item)}</p>
          </li>
        ))}
      </ul>
    );
  }
}

const terms = [
  {
    term: /(birth|marriage|death)s?( (certificate|record)s?)?/i,
    related_links: ['general_register_office'],
    strings_to_match: [
      'birth',
      'births',
      'birth certificate',
      'birth certificates',
      'birth record',
      'birth records',
      'marriage',
      'marriages',
      'marriage certificate',
      'marriage certificates',
      'marriage record',
      'marriage records',
      'death',
      'deaths',
      'death certificate',
      'death certificates',
      'death record',
      'death records'
    ],
    objectID: 0
  }
];

const links = {
  general_register_office: {
    url: 'https://www.gov.uk/general-register-office/',
    urlTwo:
      'http://www.nationalarchives.gov.uk/help-with-your-research/research-guides/birth-marriage-death-england-and-wales/',
    text: 'Looking for a birth, death, or marriage certificate?',
    description: [
      'We do not hold these documents: contact the',
      'for records created after 1837. For earlier dates consult our ',
      'General Register Office',
      'research guide'
    ],
    source: 'External Websites / Research Guides',
    dataGTM: ['Recommended links:GRO', 'Recommended links:Research Guide'],
    objectID: 0
  }
};
