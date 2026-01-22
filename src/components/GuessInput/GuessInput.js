import react from 'react';
import React from 'react';

function GuessInput() {
  const [guess, setGuess] = react.useState("");

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(guess);
      setGuess('');
  }

  const handleChange = (event) => {
    event.stopPropagation();
    event.target.setCustomValidity('')
    setGuess(event.target.value.toUpperCase())
  }

  const handleInvalid = (event) => {
    event.stopPropagation();
    const value = event.target.value;
    if (!value) {
      event.target.setCustomValidity('Please enter a guess.');
    } else if (value.length !== 5) {
      event.target.setCustomValidity('Your guess must consist of five letters.');
    } else {
      event.target.setCustomValidity('Your guess must consist only of letters.')
    }
  }

  const handleInput = (event) => {
        event.stopPropagation();
        event.target.setCustomValidity('')
  }

  return (
  <form 
    className='guess-input-wrapper'
    onSubmit={handleSubmit}
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
      onInput={handleInput}
    />
  </form>);
}

export default GuessInput;
