import React from 'react';

const AuthorList = ({ authors, handleEdit, handleDelete }) => {
  return (
    <div>
      <h2>All Authors</h2>
      {authors.map((author) => (
        <div key={author._id}>
          <strong>{author.name}</strong>
          <button onClick={() => handleEdit(author)}>Edit</button>
          <button onClick={() => handleDelete(author._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AuthorList;