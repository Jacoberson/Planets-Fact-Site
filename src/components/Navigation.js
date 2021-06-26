import React from "react";

const Navigation = ({ data, setPlanet }) => {
  return (
    <nav id="nav-container">
      <div id="nav-bar"></div>
      <h2 id="nav-title">THE PLANETS</h2>
      <div id="nav-planets">
        {data.map(planet => {
          return (
            <h4
              className="nav-planet-link"
              key={planet.name}
              onClick={() => setPlanet(planet.name)}>
              {planet.name}
            </h4>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
