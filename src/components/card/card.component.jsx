import React, {Component} from 'react';
import './card.styles.css'

class Card extends Component{

    constructor(props) {
        super(props);
        this.monster = props.monster;
    }

    render() {
        return (
            <div className="card-container">
                <img alt={this.monster.name} src={`https://robohash.org/${this.monster.id}?set=set2&size=180x180`}/>
                <h2>{this.monster.name}</h2>
                <h3>{this.monster.email}</h3>
            </div>
        );
    }
}

export default Card;
