import React, { useState } from 'react';
import axios from 'axios';

const AddAuthor = ({ fetchAuthors }) => {
  const [authorName, setAuthorName] = useState('');
  const [error, setError] = useState('');

  const handleCreateAuthor = async (e) => {
    e.preventDefault();

    if (authorName.length < 3) {
      setError('Author name must be at least 3 characters long');
      return;
    }

    try {
      await axios.post('http://127.0.0.1:3000/api/authors', { name: authorName });
      setAuthorName('');
      setError('');
      fetchAuthors();
    } catch (error) {
      console.error('Failed to create author:', error);
    }
  };

  return (
    <div>
      <h2>Add New Author</h2>
      <form onSubmit={handleCreateAuthor}>
        <input
          type="text"
          placeholder="Author Name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AddAuthor;