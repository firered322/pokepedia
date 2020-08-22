import React from "react";
import "./Pokedex.css";
import SearchField from "../searchfield/SearchField";
import Card from "../card/Card";

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
    };
  }
  render() {
    return (
      <div className="pokedex-container">
        <SearchField />
        <div className="pokedex-card-container">
          <Card />
        </div>
      </div>
    );
  }
}

export default Pokedex;
