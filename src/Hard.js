import React, { useState, useEffect } from 'react';
import './Hard.css';
import { hardImages, hardImageTags } from './imageLoader';
import { arcNames } from './arcs';

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function Hard() {
  const [shuffledImages, setShuffledImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setShuffledImages(shuffleArray(hardImages));
  }, []);

  const handleAnswer = () => {
    const currentImagePath = shuffledImages[currentImageIndex];
    const currentImageFilename = currentImagePath.split('/').pop().split('.')[0]; // Extract the filename
    console.log(currentImageFilename);
    const correctAnswer = hardImageTags[currentImageFilename];
    
    if (inputValue === correctAnswer) {
      setScore(score + 1000);
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setLives(lives - 1);
      if (lives <= 1) {
        alert('Game Over. Your score is ' + score + '. Please refresh the page to play again. The correct answer is ' + correctAnswer);
        // Reset the game or navigate to another component
      }
      // Do not change the currentImageIndex if the answer is wrong
      alert('Wrong answer. Try again.');
    }
    
    setInputValue(''); // Clear input
  };

  return (
    <div className="hard">
      {shuffledImages.length > 0 && currentImageIndex < shuffledImages.length ? (
        <>
          <img src={shuffledImages[currentImageIndex]} alt="Current" />
          <input 
            type="text" 
            placeholder="Type your answer" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            list="arc-names"
          />
          <datalist id="arc-names">
            {arcNames.map(arc => <option key={arc} value={arc} />)}
          </datalist>
          <button onClick={handleAnswer}>Submit</button>
          <p>Lives: {lives}</p>
          <p>Score: {score}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Hard;