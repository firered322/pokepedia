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
    const pokemonArray = Object.values(pokemonNames).slice(0, 721);
    const imageString =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
    let pokemons = pokemonArray.map((poke, id) => {
      return <Card name={poke["name"]} image={`${imageString}${id + 1}.png`} />;
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
