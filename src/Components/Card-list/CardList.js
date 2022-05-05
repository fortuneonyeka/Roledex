import { Component } from "react";
import CardImg from "../Card/CardImg";
import "./card-list.style.css"

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((item) => (
          <CardImg key={item.id} monster={item} />
        ))}
      </div>
    );
  }
}

export default CardList;
