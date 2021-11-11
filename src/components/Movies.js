import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((m, i) => (
          <div key={i}>
            {m.title}: {m.time} Minutes
            <ul>
              {m.genres.map((g, index) => (<li key={index}>{g}</li>))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Movies;
