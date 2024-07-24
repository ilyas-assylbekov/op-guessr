import React, { useState, useEffect } from 'react';
import './Easy.css';

const images = [];

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function Easy() {
  const [shuffledImages, setShuffledImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Load images from the "easy" folder
    const loadedImages = []; // You would load images here
    setShuffledImages(shuffleArray(loadedImages));
  }, []);

  const handleAnswer = (answer) => {
    // Check if the answer is correct
    if (answer === 'correct') {
      setScore(score + 1);
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setLives(lives - 1);
      if (lives <= 1) {
        alert('Game Over');
        // Reset the game or navigate to another component
      } else {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    }
  };

  return (
    <div className="easy">
      {shuffledImages.length > 0 && currentImageIndex < shuffledImages.length ? (
        <>
          <img src={shuffledImages[currentImageIndex]} alt="Current" />
          <input type="text" placeholder="Type your answer" />
          <button onClick={() => handleAnswer('correct')}>Submit</button> {/* Replace 'correct' with actual check */}
          <p>Lives: {lives}</p>
          <p>Score: {score}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Easy;