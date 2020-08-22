import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="pokemon-card">
      <img className="card-image" src={props.image} alt="" />
      <p>{props.name}</p>
    </div>
  );
};

export default Card;
