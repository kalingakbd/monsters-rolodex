import React, {Component} from 'react';
import './search.styles.css'

class Search extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input  className="search" type="search" placeholder={this.props.placeholder} onChange={this.props.handleChange}/>
            </div>
        );
    }
}
export default Search;
