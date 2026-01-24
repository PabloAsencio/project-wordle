import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);
  const [guessedCorrectly, setGuessedCorrectly] = React.useState(false);
  const handleSubmit = (guess) => {
    const userWon = answer === guess;
    setGuessedCorrectly(userWon);
    const checkedGuess = checkGuess(guess, answer);
    const newGuesses = [...guesses, checkedGuess];
    setGameOver(userWon || newGuesses.length >= NUM_OF_GUESSES_ALLOWED);
    setGuesses(newGuesses);
  }
  return (
  <>
  <GuessResults guesses={guesses}/>
  <GuessInput handleSubmit={handleSubmit} gameOver={gameOver}/>
  <Banner gameOver={gameOver} userWon={guessedCorrectly} answer={answer} numberOfGuesses={guesses.length} />
  </>
  
);
}

export default Game;
