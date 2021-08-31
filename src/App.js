import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopNavigation from './components/DesktopNavigation';
import MobileNavigation from './components/MobileNavigation';
import DesktopPlanetPage from './components/DesktopPlanetPage';
import MobilePlanetPage from './components/MobilePlanetPage';
import data from './data.json';

function App() {
  const [planet, setPlanet] = useState('Mercury');
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(min-width: 280px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });

  if (isDesktop) {
    return (
      <div>
        <DesktopNavigation data={data} setPlanet={setPlanet} />
        <DesktopPlanetPage data={data} planet={planet} />
      </div>
    );
  } else if (isTablet) {
    return <h1>tablet</h1>;
  } else if (isMobile) {
    return (
      <>
        <MobileNavigation
          data={data}
          setPlanet={setPlanet}
          setMenuOpen={setMenuOpen}
        />
        {!menuOpen && <MobilePlanetPage data={data} planet={planet} />}
      </>
    );
  }
}

export default App;
