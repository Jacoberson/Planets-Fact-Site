import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopNavigation from './components/DesktopNavigation';
import MobileNavigation from './components/MobileNavigation';
import PlanetPage from './components/PlanetPage';
import data from './data.json';

function App() {
  const [planet, setPlanet] = useState('Mercury');
  const isMobile = useMediaQuery({ query: '(min-width: 320px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });

  if (isDesktop) {
    return (
      <div>
        <DesktopNavigation data={data} setPlanet={setPlanet} />
        <PlanetPage data={data} planet={planet} />
      </div>
    );
  } else if (isTablet) {
    return <h1>tablet</h1>;
  } else if (isMobile) {
    return <MobileNavigation data={data} setPlanet={setPlanet} />;
  }
}

export default App;
