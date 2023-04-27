import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import BannerWord from './components/BannerWord';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path= "/" element={<Home />} />
        <Route path="/4" element={<Number />} />
        <Route path="/hello" element={<Word />} />
        <Route path="/hello/blue/red" element={<BannerWord />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
