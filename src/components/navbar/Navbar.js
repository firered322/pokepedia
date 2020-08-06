import React from "react";
import './Navbar.css'

const Navabar = () => {
  return (
    <nav>
      <div className="nav-logo">Header</div>
      <div className="nav-links-holder">
        <ul className="nav-links">
          <li className="nav-link">Home</li>
          <li className="nav-link">PokeDex</li>
          <li className="nav-link">Battler</li>
        </ul>
      </div>
    </nav>
  );
};
export default Navabar;
