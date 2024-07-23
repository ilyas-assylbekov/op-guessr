import React from 'react';
import './App.css';
import Header from './Header';
import ChooseDifficulty from './ChooseDifficulty';
import Easy from './Easy';
import Hard from './Hard';

function App() {
  const [difficulty, setDifficulty] = React.useState(null);

  const handleChooseDifficulty = (difficulty) => {
    setDifficulty(difficulty);
  };

  return (
    <div className="App">
      <Header />
      {difficulty === null && <ChooseDifficulty onChoose={handleChooseDifficulty} />}
      {difficulty === 'easy' && <Easy />}
      {difficulty === 'hard' && <Hard />}
    </div>
  );
}

export default App;
