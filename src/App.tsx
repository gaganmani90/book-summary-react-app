import React from 'react';
import './App.css';
import RecommendationButton from "./component/RecommendationButton";
import ProfilesView from "./component/ProfilesView";
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom';
import Navigation from "./component/Navigation";
import ProfileQueryHistoryTable from "./component/ProfileQueryHistoryTable";

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
                      <Route path="/profiles/:id" element={<ProfileQueryHistoryTable id="644347f80f684f1a745f0d30" />}/>
                  </Routes>
              </div>
          </Router>
      </header>
    </div>
  );
}

export default App;
