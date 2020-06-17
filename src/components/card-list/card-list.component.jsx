import React, {Component} from 'react';
import './card-list.styles.css'
import Card from "../card/card.component";

class CardList extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.monsters)
    }

    render() {
        return (
            <div className="card-list">
                {
                    this.props.monsters.map(eachMonster => (
                        // console.log(eachMonster)
                        <Card key={eachMonster.id} monster={eachMonster}/>
                    )
                )
                }
            </div>
        );
    }
}

export default CardList;
