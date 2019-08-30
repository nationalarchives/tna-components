import React, {Component} from 'react';

class SearchOption extends Component {

    render_search_options(arr) {
        const {group_name, desktop} = this.props;

        return arr.map((item, index) =>
            <div key={index}>
                <input name={group_name} type="radio" id={item.id}
                       defaultChecked={(index === 0) ? true : false}
                       className={(desktop ? 'sr-only' : null)}/>
                <label htmlFor={item.id}>{item.label}</label>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.render_search_options(this.props.options)}
            </div>
        );
    }
}

export default SearchOption;
