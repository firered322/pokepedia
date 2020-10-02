import React from "react";
import "./Landing.css";
import logo from "../../assets/pokemon.svg";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing-parent">
      <div className="landing-child-main">
        <p>
          Welcome to Poképedia, here you can expore the Pokédex and learn get in depth info about all the Pokémons.
        </p>
        <div className="cta-btn-holder">
          <NavLink to="/pokedex">
            <div className="btn-1">Explore the Pokédex</div>
          </NavLink>

          <NavLink to="/">
            <div className="btn-1">Explore Rankings</div>
          </NavLink>
        </div>
      </div>

      <div className="landing-child">
        <div>
          <img src={logo} className="spinner-logo" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
