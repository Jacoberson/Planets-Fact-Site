import React, { useState } from 'react';
import sourceIcon from '../images/icon-source.svg';

const DesktopPlanetPage = ({ data, planet }) => {
  const [view, setView] = useState('overview');
  const [image, setImage] = useState('planet');

  let currentPlanet = data.filter(p => p.name === planet);
  currentPlanet = currentPlanet[0];

  const changeContent = (content, image) => {
    setView(content);
    setImage(image);
  };

  return (
    <>
      <div id="planet-page-container">
        <div id="planet-image-container">
          {view !== 'geology' ? (
            <img
              id="planet-image"
              src={currentPlanet.images[image]}
              alt={planet.name + view}
            />
          ) : (
            <div id="geology-image-container">
              <img
                id="geology-planet-image"
                src={currentPlanet.images['planet']}
                alt={planet.name + view}
              />
              <img
                id="geology-image"
                src={currentPlanet.images[image]}
                alt={currentPlanet.name + 'geology'}
              />
            </div>
          )}
        </div>
        <div id="planet-info-container">
          <h1 id="current-planet-name">{planet}</h1>
          <p id="planet-content">{currentPlanet[view].content}</p>
          <p id="planet-link">
            Source: <a href={currentPlanet[view].source}>Wikipedia</a>{' '}
            <img src={sourceIcon} alt="arrow icon" />
          </p>
          <div id="button-container">
            <button
              id="overview-btn"
              className={
                view === 'overview' ? `${currentPlanet.name}-active btn` : 'btn'
              }
              type="button"
              onClick={() => changeContent('overview', 'planet')}>
              <span id="overview-btn-number">01</span>
              <span id="overview-btn-text">Overview</span>
            </button>
            <button
              id="structure-btn"
              className={
                view === 'structure'
                  ? `${currentPlanet.name}-active btn`
                  : 'btn'
              }
              type="button"
              onClick={() => changeContent('structure', 'internal')}>
              <span id="structure-btn-number">02</span>
              <span id="structure-btn-text">Internal Structure</span>
            </button>
            <button
              id="geology-btn"
              className={
                view === 'geology' ? `${currentPlanet.name}-active btn` : 'btn'
              }
              type="button"
              onClick={() => changeContent('geology', 'geology')}>
              <span id="geology-btn-number">03</span>
              <span id="geology-btn-text">Surface Geology</span>
            </button>
          </div>
        </div>
        <div id="planet-quick-info-container">
          <div className="quick-info-box">
            <p className="quick-info-title">Rotation Time</p>
            <p className="quick-info-number">{currentPlanet.rotation}</p>
          </div>
          <div className="quick-info-box">
            <p className="quick-info-title">Revolution Time</p>
            <p className="quick-info-number">{currentPlanet.revolution}</p>
          </div>
          <div className="quick-info-box">
            <p className="quick-info-title">Radius</p>
            <p className="quick-info-number">{currentPlanet.radius}</p>
          </div>
          <div className="quick-info-box">
            <p className="quick-info-title">Average Temp.</p>
            <p className="quick-info-number">{currentPlanet.temperature}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopPlanetPage;
