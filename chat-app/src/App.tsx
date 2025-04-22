import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NotFound from "./components/NotFound";
import Games from "./pages/Games"
import Game from "./pages/Game"

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
              <Route path="/" element={<Games/>}/>
              <Route path="/games" element={<Games/>}/>
              <Route path="/games/:id" element={<Game/>} />
              <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
