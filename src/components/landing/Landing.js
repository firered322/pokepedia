import React from "react";
import "./Landing.css";
import logo from "../../assets/pokemon.svg";

const Landing = () => {
  return (
    <div className="landing-parent">
      <div className="landing-child">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi natus
          consequatur fuga reprehenderit. Atque cupiditate quisquam ut amet
          aspernatur! Non eveniet animi similique officia rerum aspernatur sed
          perferendis a iure?
        </p>
        <div className="cta-btn-holder">
          <button>Explore Pokédex</button>
          <button>Explore Rankings</button>
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
