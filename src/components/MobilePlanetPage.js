import React, { useState } from 'react';

const MobilePlanetPage = ({ data, planet }) => {
  const [view, setView] = useState('overview');
  const [image, setImage] = useState('planet');
  let currentPlanet = data.filter(p => p.name === planet);
  currentPlanet = currentPlanet[0];

  const changeContent = (content, image) => {
    setView(content);
    setImage(image);
  };

  return (
    <div id="mobile-page-container">
      <div className="planet-page-menu">
        <h3
          className="menu-button"
          onClick={() => changeContent('overview', 'planet')}>
          Content
        </h3>
        <h3
          className="menu-button"
          onClick={() => changeContent('structure', 'internal')}>
          Structure
        </h3>
        <h3
          className="menu-button"
          onClick={() => changeContent('geology', 'geology')}>
          Surface
        </h3>
      </div>
      <div className="planet-divider" />
      <div className="image-container">
        {view !== 'geology' ? (
          <img src={currentPlanet.images[image]} alt={planet.name + view} />
        ) : (
          <div className="mobile-geology-image">
            <img
              src={currentPlanet.images['planet']}
              alt={planet.name + view}
            />
            <img
              src={currentPlanet.images[image]}
              alt={currentPlanet.name + 'geology'}
            />
          </div>
        )}
      </div>
      <div className="mobile-planet-info">
        <h1 className="mobile-planet-name">{planet}</h1>
        <p className="info-paragraph">{currentPlanet[view].content}</p>
      </div>
    </div>
  );
};

export default MobilePlanetPage;
