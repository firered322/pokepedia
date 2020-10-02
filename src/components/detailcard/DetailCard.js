import React from "react";
import "./DetailCard.css";

const DetailCard = (props) => {
  return (
    <div className="pokemon-card">
      <img className="card-image" src={props.image} alt="" />
      <p>{props.name}</p>
    </div>
  );
};

export default DetailCard;
