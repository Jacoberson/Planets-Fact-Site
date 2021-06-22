import React from "react";
import data from "../data.json";

const Navigation = () => {
  return (
    <nav className="container">
      <h1 className="title">THE PLANETS</h1>
      <div id="planet-navs">
        {data.map(planet => {
          return (
            <ul className="planet-link" key={planet.name}>
              <li>{planet.name}</li>
            </ul>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
