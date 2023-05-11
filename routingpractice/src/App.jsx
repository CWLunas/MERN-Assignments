import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Combo from './components/Combo';
import WordColor from './components/WordColor';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Combo />} />
        <Route path="/:word/:textColor/:backgroundColor"element={<WordColor />}/>
      </Routes>
    </Router>
  );
};

export default App;