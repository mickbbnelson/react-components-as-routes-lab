import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((d, i) => (
        <div key={i}>
          {d.name}
          <ul>
            {d.movies.map((movie, index) => (<li key={index}>{movie}</li>))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors
