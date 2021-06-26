import React, { useState } from "react";

const PlanetPage = ({ data, planet }) => {
  const [view, setView] = useState("overview");
  const currentPlanet = data.filter(p => p.name === planet);

  const showOverview = () => {
    setView("overview");
  };

  const showStructure = () => {
    setView("structure");
  };

  const showGeology = () => {
    setView("geology");
  };

  return (
    <>
      <div id="planet-info-container">
        <h1 id="current-planet-name">{planet}</h1>
        <p id="planet-content">{currentPlanet[0][view].content}</p>
        <p id="planet-link">
          Source: <a href={currentPlanet[0][view].source}>Wikipedia</a>
        </p>
        <div id="button-container">
          <button
            id="overview-btn"
            type="button"
            onClick={() => showOverview()}>
            <span id="overview-btn-number">01</span>
            <span id="overview-btn-text">Overview</span>
          </button>
          <button
            id="structure-btn"
            type="button"
            onClick={() => showStructure()}>
            <span id="structure-btn-number">02</span>
            <span id="structure-btn-text">Internal Structure</span>
          </button>
          <button id="geology-btn" type="button" onClick={() => showGeology()}>
            <span id="geology-btn-number">03</span>
            <span id="geology-btn-text">Surface Geology</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default PlanetPage;
