import React, {Component} from 'react';

class SearchOption extends Component {

    render_search_options(arr) {
        return arr.map((item, index) =>
             <div key={index}>
                <input name={this.props.group_name} type="radio" id={item.id} defaultChecked={(index === 0) ? true : false}/>
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