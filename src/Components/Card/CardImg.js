import React from "react";
import { Component } from "react";
import "./card-img.style.css"

class CardImg extends Component { 
  render(){
    const {monster} = this.props

    //destructure off monster so i dont have to use monster.name etc in mutiple places
    //I can destructure and use the variable in all occassions but i am chosing to use them 
    //where a variable is mentioned more than once, like name and address
    const {name,address} = monster;
    return (
      <div className="card-container">
        <img
          src={`https://robohash.org/${monster.id}?set=set2&size= 180x180`}
          alt={`monster ${name}`}
        />
        <h2>Name: {name}</h2>
        <p>email: {monster.email}</p>
        <p>User Name: {monster.username}</p>
        <p>Address: {address.suite} {address.street}, {address.city}</p>
      </div>
    );
  }
  
};

export default CardImg;
