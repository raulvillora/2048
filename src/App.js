import React, { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Game from './components/Game';

export default function App() {
  const [landingPageHidden, setLandingPageHidden] = useState(false);
  const [gameHidden, setGameHidden] = useState(true);

  const handleLandingPageClick = () => {
    setLandingPageHidden(true);
    setGameHidden(false);
  };

  return (
    <div className="App">
      {!landingPageHidden && (
        <div className="headingStyle">
          <LandingPage handleLandingPageClick={handleLandingPageClick} />
        </div>
      )}
      {!gameHidden && <Game />}
    </div>
  );
}
