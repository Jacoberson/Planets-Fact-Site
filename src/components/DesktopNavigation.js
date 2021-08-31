import React from 'react';

const DesktopNavigation = ({ data, setPlanet }) => {
  return (
    <nav id="desktop-nav-container">
      <div id="desktop-nav-bar" />
      <h2 id="desktop-nav-title">THE PLANETS</h2>
      <div id="desktop-nav-planets">
        {data.map(planet => {
          return (
            <h4
              className="desktop-nav-planet-link"
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

export default DesktopNavigation;
