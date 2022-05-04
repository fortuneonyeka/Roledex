import "./App.css";
import { Component } from "react";
import CardList from "./Components/Card-list/CardList";
import Searchbox from "./Components/Search-box/Search-box";

class App extends Component {
  

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monstersList) => {
        this.setState(() => {
          return {
            monsters: monstersList,
          };
        });
      });
  }

  // handleChange = (e) => {
  //   this.setState({ searchfield: e.target.value });
  // };

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    //destructure states of monster, searchField and onSearchChange so we wont have to use this keyword anymore
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
         <h1 className="page-title">Monster Roledex</h1>
        <Searchbox searchMonsters={onSearchChange} placeholder={"Search Monsters"}/>
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
