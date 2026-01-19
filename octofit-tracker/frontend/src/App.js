import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

import { useState } from 'react';
import DarkModeToggle from './components/DarkModeToggle';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Router>
      <div className={`container-fluid px-0${darkMode ? ' octofit-dark' : ''}`}>
        <header className="octofit-header mb-4">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded shadow-sm">
            <div className="container-fluid">
              <Link className="navbar-brand fw-bold d-flex align-items-center me-auto" to="/">
                <img src={logo} alt="Octofit Logo" className="octofit-logo me-2" />
                <span className="d-none d-sm-inline">Octofit Tracker</span>
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/teams">Teams</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/activities">Activities</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/workouts">Workouts</Link></li>
                </ul>
                <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </div>
          </nav>
        </header>
        <main className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <Routes>
                <Route path="/users" element={<Users />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/activities" element={<Activities />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/workouts" element={<Workouts />} />
                <Route path="/" element={<Users />} />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
