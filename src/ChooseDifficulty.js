import React from 'react';
import './ChooseDifficulty.css';

function ChooseDifficulty({ onChoose }) {
  return (
    <div className="choose-difficulty">
      <h1>Choose Difficulty:</h1>
      <button onClick={() => onChoose('easy')}>Easy</button>
      <button onClick={() => onChoose('hard')}>Hard</button>
    </div>
  );
}

export default ChooseDifficulty;