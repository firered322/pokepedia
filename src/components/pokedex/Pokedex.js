import React from "react";
import "./Pokedex.css";
import SearchField from "../searchfield/SearchField";

const Pokedex = () => {
  return (
    <div className="pokedex-container">
      <SearchField />
    </div>
  );
};

export default Pokedex;
