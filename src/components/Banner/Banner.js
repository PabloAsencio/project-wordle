import React from 'react';

function Banner({gameOver, userWon, answer, numberOfGuesses}) {
  return gameOver && (
  <div className={`banner ${userWon ? 'happy' : 'sad'}`}>
    {userWon ? <HappyBanner numberOfGuesses={numberOfGuesses} /> : <SadBanner answer={answer} /> }
  </div>
);
}

function HappyBanner({numberOfGuesses}) {
  return (
  <p>
    <strong>Congratulations!</strong> Got it in <strong>{numberOfGuesses} {numberOfGuesses === 1 ? 'guess' : 'guesses'}</strong>.
  </p>
  );
}

function SadBanner({answer}) {
  return (
  <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  );
}

export default Banner;
