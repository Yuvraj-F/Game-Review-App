import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NotFound from "./components/NotFound";
import Games from "./pages/Games"
import Game from "./pages/Game"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
              <Route path="/" element={<Games/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/register" element={<RegisterPage/>}/>
              <Route path="/games" element={<Games/>}/>
              <Route path="/search" element={<Games/>}/>
              <Route path="/games/:id" element={<Game/>} />
              <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
