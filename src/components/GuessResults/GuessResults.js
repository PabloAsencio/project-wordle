import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({guesses}) {
  const guessSlots = range(0, NUM_OF_GUESSES_ALLOWED).map(
    (index) => index < guesses.length ? guesses[index] : ''
  );

  return (
  <div className='guess-results'>
    {guessSlots.map((guess, index) => <Guess guess={guess} key={index}/>)}
  </div>
);
}

export default GuessResults;
