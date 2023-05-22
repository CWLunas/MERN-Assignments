import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const [authors, setAuthors] = useState([]);
  const [authorNameInput, setAuthorNameInput] = useState('');
  const [editAuthorName, setEditAuthorName] = useState('');
  const [editAuthorId, setEditAuthorId] = useState('')

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/authors');
      setAuthors(response.data);
    } catch (error) {
      console.error('Failed to fetch authors:', error);
    }
  };

  const handleCreateAuthor = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/authors', { name: authorNameInput });
      setAuthorNameInput('');

      fetchAuthors();
    } catch (error) {
      console.error('Failed to create author:', error);
    }
  };

  const handleEditAuthor = async (event, id) => {
    event.preventDefault();
    try {
      await axios.patch(`http://127.0.0.1:8000/api/authors/${id}`, { name: editAuthorName });
      setEditAuthorName('');
      fetchAuthors();
    } catch (error) {
      console.error('Failed to update author:', error);
    }
  };

  const handleDeleteAuthor = async (authorId) => {
    try {
      setEditAuthorId('');
      await axios.delete(`http://127.0.0.1:8000/api/authors/${authorId}`);
      fetchAuthors();
    } catch (error) {
      console.error('Failed to delete author:', error);
    }
  };
  return (
    <Router>
      <div>
        <h1>Favorite Authors</h1>

        <nav>
          <ul>
            <li>
              <Link to="/add">Add New Author</Link>
            </li>
          </ul>
        </nav>

        <Routes>
        <Route
            path="/add"
            element={
              <>
                <h2>Add New Author</h2>
                <form onSubmit={handleCreateAuthor}>
                  <input
                    type="text"
                    name="authorName"
                    placeholder="Author Name"
                    value={authorNameInput}
                    onChange={(e) => setAuthorNameInput(e.target.value)}
                  />
                  <button type="submit">Create</button>
                  <Link to="/">Home</Link>
                </form>
              </>
            }
          />

          <Route
            path="/edit/:id"
            element={
              <>
                <h2>Edit Author</h2>
                <form onSubmit={(event) => handleEditAuthor(event, editAuthorId)}>
                  <input
                    type="text"
                    name="authorName"
                    placeholder="Author Name"
                    value={editAuthorName}
                    onChange={(e) => setEditAuthorName(e.target.value)}
                  />
                  <button type="submit">Save</button>
                  <Link to="/">Home</Link>
                </form>
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                <h2>All Authors</h2>
                {authors.map((author) => (
                  <div key={author._id}>
                    <strong>{author.name}</strong>
                    <Link to={`/edit/${author._id}`}>Edit</Link>
                    <button onClick={() => handleDeleteAuthor(author._id)}>Delete</button>
                  </div>
                ))}
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;