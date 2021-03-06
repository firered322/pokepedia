import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import Pokedex from "./components/pokedex/Pokedex";
import Raid from "./components/raid/Raid";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Route exact path="/" component={Landing} />
        <Route exact path="/pokedex" component={Pokedex} />
        <Route exact path="/battler" component={Raid} />
      </div>
    </Router>
  );
}

export default App;
