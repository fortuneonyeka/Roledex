import CardImg from "../Card/CardImg";
import "./card-list.style.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((item) => (
        <CardImg key={item.id} monster={item} />
      ))}
    </div>
  );
};

export default CardList;
