import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NotFound from "./components/NotFound";
import GameList from "./components/GamesList";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
              <Route path="/games" element={<GameList/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
