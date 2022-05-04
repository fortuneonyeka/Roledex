import { Component } from "react";
import CardImg from "./CardImg";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {/* {monsters.map((item) => <CardImg key={item.id} monster={item}/>)} */}
        {monsters.map((item) => (
          <CardImg key={item.id} monster={item} />
        ))}
      </div>
    );
  }
}

// import React from "react";
// import CardImg from "./CardImg";

// const CardList = ({ monsters }) => {
//   return (
//     <div>
//       <span className="card-list">
//         {monsters.map((item) => <CardImg key={item.id} monster={item}/>)}
//       </span>
//     </div>
//   );
// };

export default CardList;
