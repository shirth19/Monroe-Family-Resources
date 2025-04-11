import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import CrisisSupport from './components/CrisisSupport';
import HealthServices from './components/HealthServices';
import MentalHealth from './components/MentalHealth';
import Housing from './components/Housing';
import SubstanceUse from './components/SubstanceUse';
import YouthServices from './components/YouthServices';
import SuggestionForm from './components/SuggestionForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crisis" element={<CrisisSupport />} />
            <Route path="/health" element={<HealthServices />} />
            <Route path="/mental-health" element={<MentalHealth />} />
            <Route path="/housing" element={<Housing />} />
            <Route path="/substance" element={<SubstanceUse />} />
            <Route path="/youth" element={<YouthServices />} />
          </Routes>
        </main>
        <footer className="footer-section">
          <div className="footer-content">
            <div className="footer-form">
              <SuggestionForm />
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
