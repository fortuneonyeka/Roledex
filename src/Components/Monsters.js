// import { Component } from "react";
// import CardList from "./CardList";

// class Monsters extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((monstersList) => {
//         this.setState(() => {
//           return {
//             monsters: monstersList,
//           };
//         });
//       });
//   }

//   // handleChange = (e) => {
//   //   this.setState({ searchfield: e.target.value });
//   // };

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     //destructure states of monster, searchField and onSearchChange so we wont have to use this keyword anymore
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonster = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField.toLowerCase());
//     });

//     return (
//       <div>
//         <input
//           type="search"
//           placeholder="search monsters"
//           // handleChange={this.handleChange}
//           className="search-box"
//           onChange={onSearchChange}
//         />
//         <CardList monsters={filteredMonster} />
//       </div>
//     );
//   }
// }

// export default Monsters;
