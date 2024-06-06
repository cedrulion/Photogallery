// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery';


function App() {
  return (
    <Router>
       <Routes>
       <Route  path="/" element={<Gallery/>} ></Route>
        <Route  path="/gallery" element={<Gallery/>} ></Route>
        
        </Routes>
    </Router>
  );
}

export default App;
