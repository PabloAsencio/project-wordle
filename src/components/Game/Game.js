import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Guess';
import GuessList from '../GuessList'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  function submitGuess(newGuess) {
    const nextGuesses = [...guesses];
    nextGuesses.push(
      {
        guess: newGuess,
        id: crypto.randomUUID()
      }
    );
    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessList guesses={guesses} />
      <Guess submitGuess={submitGuess} />;
    </>
  );
}

export default Game;
