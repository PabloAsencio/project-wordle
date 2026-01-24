import React from 'react';
import { range } from '../../utils'

function Guess({ value }) {

  return (
  <p className='guess'>
    {value.map(({letter, status}, index) => <span className={`cell ${status}`} key={index}>{letter}</span>)}
  </p>);
}

export default Guess;
