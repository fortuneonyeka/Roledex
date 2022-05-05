import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./Components/Card-list/CardList";
import Searchbox from "./Components/Search-box/Search-box";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)


  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const monstersList = await response.json();
    setMonsters(monstersList);
  };

  useEffect(() => {
    fetchData();
  }, []);


  useEffect(() => {
     const newFilteredMonster = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField.toLowerCase());
  });

  setFilteredMonsters(newFilteredMonster)
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

 

  return (
    <div className="App">
      <h1 className="page-title">Monster Roledex</h1>
      <Searchbox
        onChangeHandler={onSearchChange}
        placeholder={"Search Monsters"}
        className={"search-monster"}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
