import React, { useState } from 'react';
import menuIcon from '../images/icon-hamburger.svg';
import chevronIcon from '../images/icon-chevron.svg';

const OpenedMenu = ({ data }) => {
  return (
    <div id="menu-planet-container">
      {data.map(planet => (
        <React.Fragment key={planet.name}>
          <div key={planet.name} className="planet-menu-row">
            <h4 className="planet-menu-name">{planet.name}</h4>
            <img src={chevronIcon} alt="chevron" id="chevron" />
          </div>
          <div className="divider" />
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
        <img src={menuIcon} alt="menu" onClick={() => toggleMenu()} id="menu" />
      </div>
      <div className="divider" />
      {displayMenu && <OpenedMenu data={data} />}
    </nav>
    // <nav id="desktop-nav-container">
    //   <div id="desktop-nav-bar" />
    //   <h2 id="desktop-nav-title">THE PLANETS</h2>
    //   <div id="desktop-nav-planets">
    //     {data.map(planet => {
    //       return (
    //         <h4
    //           className="desktop-nav-planet-link"
    //           key={planet.name}
    //           onClick={() => setPlanet(planet.name)}>
    //           {planet.name}
    //         </h4>
    //       );
    //     })}
    //   </div>
    // </nav>
  );
};

export default MobileNavigation;
