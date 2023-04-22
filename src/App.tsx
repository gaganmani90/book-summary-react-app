import React from 'react';
import './App.css';
import RecommendationButton from "./component/RecommendationButton";
import ProfilesView from "./component/ProfilesView";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./component/Navigation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
              <div>
                  <Navigation />
                  <Routes>
                      <Route path="/" element={<RecommendationButton />} />
                      <Route path="/profiles" element={<ProfilesView/>} />
                  </Routes>
              </div>
          </Router>
      </header>
    </div>
  );
}

export default App;
