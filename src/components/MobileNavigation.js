import React, { useState } from 'react';
import { ReactComponent as MenuIcon } from '../images/icon-hamburger.svg';
import chevronIcon from '../images/icon-chevron.svg';

const OpenedMenu = ({ data }) => {
  return (
    <div id="menu-planet-container">
      {data.map(planet => (
        <React.Fragment key={planet.name}>
          <div
            key={planet.name}
            className="planet-menu-row"
            onClick={() => console.log(planet.name)}>
            <div className={`${planet.name}-dot dot`}>
              <h4 className="planet-menu-name">{planet.name}</h4>
            </div>
            <img src={chevronIcon} alt="chevron" id="chevron" />
          </div>
          <div className="planet-divider" />
        </React.Fragment>
      ))}
    </div>
  );
};

const MobileNavigation = ({ data, setPlanet }) => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const toggleMenu = () => setDisplayMenu(!displayMenu);

  return (
    <nav>
      <div className="above-nav">
        <h2 className="title">THE PLANETS</h2>
        {displayMenu ? (
          <MenuIcon id="menu" fill="#FFFFFF3B" onClick={() => toggleMenu()} />
        ) : (
          <MenuIcon id="menu" fill="#FFF" onClick={() => toggleMenu()} />
        )}
      </div>
      <div className="divider" />
      {displayMenu && <OpenedMenu data={data} />}
    </nav>
  );
};

export default MobileNavigation;
