import React from 'react';
import Poke from './components/PokeAPI';

function App() {
  return (
    <div className="container">
    <div className="row mt-3">
      <div className="col-md-9 offset-md-1">
        <div className="card bg-warning text-black p-5">
          <div>
            <h2 className="text-black p-2">Pokemon API</h2>
              <Poke />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default App;
