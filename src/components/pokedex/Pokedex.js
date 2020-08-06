import React from "react";
import "./Pokedex.css";
import SearchField from "../searchfield/SearchField";

const Pokedex = () => {
  return (
    <div className="pokedex-container">
      <p>Pokedex</p>
      <SearchField />
    </div>
  );
};

export default Pokedex;
