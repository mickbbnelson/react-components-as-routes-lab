import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((a, i) => (
        <div key={i}>{a.name}
        <ul>
          {a.movies.map((movie, index) => (<li key={index}>{movie}</li>))}
        </ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;
