import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/pokemon.svg";
import menu from "../../assets/menu.svg";

const Navabar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} className="svg-logo" alt="logo" />
      </div>
      <div className="nav-links-holder">
        <ul className="nav-links">
          <li className="nav-link">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/pokedex">Pokedex</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/battler">Battler</NavLink>
          </li>
          <img src={menu} className="svg-menu" alt="logo" />
        </ul>
      </div>
    </nav>
  );
};
export default Navabar;
