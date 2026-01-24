import react from 'react';
import React from 'react';

function GuessInput({handleSubmit, gameOver}) {
  const [guess, setGuess] = react.useState("");

  const handleChange = (event) => {
    event.target.setCustomValidity('')
    setGuess(event.target.value.toUpperCase())
  }

  const handleInvalid = (event) => {
    const value = event.target.value;
    if (!value) {
      event.target.setCustomValidity('Please enter a guess.');
    } else if (value.length !== 5) {
      event.target.setCustomValidity('Your guess must consist of five letters.');
    } else {
      event.target.setCustomValidity('Your guess must consist only of letters.')
    }
  }

  return (
  <form 
    className='guess-input-wrapper'
    onSubmit={(event) => {
      event.preventDefault();
      handleSubmit(guess);
      setGuess('');
    }}
  >
    <label htmlFor='guess-input'>Enter guess:</label>
    <input 
      type='text' 
      id='guess-input'
      value={guess}
      onChange={handleChange} 
      required
      pattern='[A-Za-z]{5}'
      onInvalid={handleInvalid}
      onInput={handleInvalid}
      disabled={gameOver}
    />
  </form>);
}

export default GuessInput;
