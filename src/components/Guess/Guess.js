import React from 'react';
import { range } from '../../utils'

function Guess({ guess }) {
  const letters = guess ?
    guess.split('', 5) :
    range(0, 5).map(num => ''); 

  return (
  <p className='guess'>
    {letters.map((letter, index) => <span className='cell' key={index}>{letter}</span>)}
  </p>);
}

export default Guess;
