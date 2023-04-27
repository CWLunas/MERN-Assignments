import React from 'react';
import { Link } from 'react-router-dom';

function Word(props) {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-9 offset-md-1">
          <div className="card bg-light text-dark  p-5"> 
            <h1>The word is: hello</h1>
            <p>Go back to <Link to="/">Home</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
  }

export default Word;
