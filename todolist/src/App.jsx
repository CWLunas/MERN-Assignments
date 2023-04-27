import React from 'react';
import TodoList from './components/TodoList';

const App = () => {
  return (
  <div className="container">
    <div className="row mt-3">
      <div className="col-md-9 offset-md-1">
        <div className="card bg-secondary text-white p-5">
          <div>
            <h2 className="text-white p-2">My Ever-Growing Obsessive-Compulsive Yoke & Shackles of Toil & Woe</h2>
              <TodoList />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default App;
