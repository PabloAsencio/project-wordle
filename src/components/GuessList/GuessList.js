import React from 'react';

function GuessList({guesses}) {
  return (
    <div className="guess-results">
      {guesses.map(({id, guess}) => (
        <div className="guess" key={id}>{guess}</div>
      ))}
    </div>
  );
}

export default GuessList;
