import { Component } from "react";
import CardImg from "./CardImg";

class CardList extends Component {
  render() {
   const {monsters} = this.props
   return(
     <div className="container">
       <div className="row">
         
          <div className="d-flex flex-wrap p-4 m-9">
       {/* {monsters.map((item) => <CardImg key={item.id} monster={item}/>)} */}
       {monsters.map((item) => <p key={item.id} >{item.name}</p>)}
       
     </div>
      
       </div>
     </div>
     
   )
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
