import React from 'react';
import './styles/App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from "./component/Navigation";
import ProfileQueryHistoryTable from "./component/ProfileQueryHistoryTable";
import {HomePage} from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
              <div>
                  <Navigation />
                  <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/profiles" element={<ProfilePage/>} />
                      <Route path="/login" element={<LoginPage/>} />
                      <Route path="/profiles/:id" element={<ProfileQueryHistoryTable id="644347f80f684f1a745f0d30" />}/>
                  </Routes>
              </div>
          </Router>
      </header>
    </div>
  );
}

export default App;
