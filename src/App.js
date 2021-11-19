import './App.css';
import { useState } from 'react';

// initialize card images
const cardImages = [
  { src: '/img/helmet-1.png' },
  { src: '/img/potion-1.png' },
  { src: '/img/ring-1.png' },
  { src: '/img/scroll-1.png' },
  { src: '/img/shield-1.png' },
  { src: '/img/sword-1.png' },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  //shuffle cards function
  const shuffleCards = () => {
    //spread all cards in pair
    const shuffledCards = [...cardImages, ...cardImages]
      //shuffle cards
      .sort(() => Math.random() - 0.5)
      //add id property to card object
      .map((card) => ({ ...card, id: Math.random() * 10 }));
    //set shuffled cards state
    setCards(shuffledCards);
    //set player turns to zero
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className='App'>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
