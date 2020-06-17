import React, {Component} from 'react';
import './App.css';
import CardList from "./components/card-list/card-list.component";
import Search from "./components/search/search.component";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            searchField: ''
        };
        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(usersJson => this.setState({monsters: usersJson}))
      console.log(this.state.monsters);
    }

    handleChange = (event) => {
        this.setState({searchField: event.target.value})
    };

    render() {
        const { monsters, searchField } = this.state;
        // const result = words.filter(word => word.length > 6);
        let filteredMonsters = [];
        if(searchField.length !== 0){
            monsters.forEach(monster => {
               if(monster.name.toLowerCase().includes(searchField.toLowerCase())){
                   filteredMonsters.push(monster);
               }
            });
        } else {
            filteredMonsters = monsters;
        }

        console.log(filteredMonsters);
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                {/*<Search placeholder="Search Monsters" handleChange={this.handleSearchChange()}/>*/}
                <Search placeholder="Search Monsters" handleChange={this.handleChange}/>
                <hr/>
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
