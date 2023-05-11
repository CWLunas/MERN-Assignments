import React from 'react';
import { useParams } from 'react-router-dom';

export const Combo = () => {
  const { id } = useParams();

  return isNaN(id) ? (
    <div style={{ textAlign: 'center' }}>The word is {id}</div>
  ) : (
    <div style={{ textAlign: 'center' }}>The number is {id}</div>
  );
};

export default Combo;