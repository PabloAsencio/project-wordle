import React from 'react';

function Guess({submitGuess}) {
  const [guess, setGuess] = React.useState('');
  return (
      <form 
      className="guess-input-wrapper"
      onSubmit={
          event => {
              event.preventDefault();
              submitGuess(guess.toUpperCase())
              setGuess('');
            }
          }
          >
          <label htmlFor="guess-input">Enter guess:</label>
          <input 
              required
              id="guess-input" 
              type="text" 
              value={guess}
              pattern="[A-Za-z]{5}"
              title="5 letter word"
              onChange={
                  event => setGuess(event.target.value.toUpperCase())
              } />
      </form>
  );
}

export default Guess;
