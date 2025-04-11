import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  
  return (
    <header className="App-header">
      <Link to="/" className="home-link">
        <h1>Monroe County Family Resources</h1>
      </Link>
      <nav>
        {location.pathname !== '/' && (
          <>
            <Link to="/">← Home</Link>
            <Link to="/crisis">Crisis Support</Link>
            <Link to="/health">Health Services</Link>
            <Link to="/mental-health">Mental Health</Link>
            <Link to="/housing">Housing</Link>
            <Link to="/substance">Substance Use</Link>
            <Link to="/youth">Youth Services</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Navigation;
