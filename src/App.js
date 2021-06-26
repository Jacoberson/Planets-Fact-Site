import { useState } from "react";
import Navigation from "./components/Navigation";
import PlanetPage from "./components/PlanetPage";
import data from "./data.json";

function App() {
  const [planet, setPlanet] = useState("Mercury");

  return (
    <div>
      <Navigation data={data} setPlanet={setPlanet} />
      <PlanetPage data={data} planet={planet} />
    </div>
  );
}

export default App;
