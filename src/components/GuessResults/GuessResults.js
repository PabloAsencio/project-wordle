import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({guesses}) {
  const emptyLetter = {"letter": '', "status": ''};
  const emptyGuess = range(5).map((index) => emptyLetter);

  const guessSlots = range(NUM_OF_GUESSES_ALLOWED).map(
    (index) => index < guesses.length ? guesses[index] : emptyGuess
  );

  return (
  <div className='guess-results'>
    {guessSlots.map((guess, index) => <Guess value={guess} key={index}/>)}
  </div>
);
}

export default GuessResults;
