import React from 'react';
import { Link } from 'react-router-dom';

function BannerWord(props) {
  const style = { /* declare your style object here */ };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-9 offset-md-1">
          <div className="card bg-light text-dark  p-5"> 
            <div style={style}>
              <h1 style={{ color: 'blue', backgroundColor: 'red' }}>The word is: hello</h1>
              <p>
                Go back to <Link to="/">Home</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }

export default BannerWord;