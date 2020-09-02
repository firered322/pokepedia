import React from "react";
import "./Pokedex.css";
import SearchField from "../searchfield/SearchField";
import Card from "../card/Card";
import pokemonNames from "../../api/pokemon_names.json";

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
    };
  }
  render() {
    const pokemonArray = Object.values(pokemonNames);
    const imageString =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";
    let pokemons = pokemonArray.map((poke, id) => {
      const paddedIndex = ('00' + (id + 1)).slice(-3)
      return <Card name={poke["name"]} image={`${imageString}/${paddedIndex}.png`} />;
    });
    return (
      <div className="pokedex-searchfield">
        <SearchField />
        <div className="pokedex-card-container">{pokemons}</div>
      </div>
    );
  }
}

export default Pokedex;
