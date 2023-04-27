import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-9 offset-md-1">
          <div className="card bg-light text-dark  p-5"> 
            <h1>Welcome</h1>
            <p>Go to:</p>
            <ul>
              <li><Link to="/4">Number 4</Link></li>
              <li><Link to="/hello">Word Hello</Link></li>
              <li><Link to="/hello/blue/red">Colored Word Hello</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
