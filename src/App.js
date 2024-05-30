// Import necessary hooks and components from React
import { useState, useEffect, useCallback } from 'react';
import SingleCard from "./components/SingleCard"
import './App.css';

// Array of card images with initial matched state set to false
const cardImages = [
  { "src": "/img/helmet-1.png", matched: false},
  { "src": "/img/potion-1.png", matched: false },
  { "src": "/img/ring-1.png", matched: false },
  { "src": "/img/scroll-1.png", matched: false },
  { "src": "/img/shield-1.png", matched: false },
  { "src": "/img/sword-1.png", matched: false },
]

function App() {

  // State variables to manage the game state
  const [cards, setCards] = useState([]) // Holds the shuffled cards
  const [turns, setTurns] = useState(0) // Counts the number of turns taken
  const [choiceOne, setChoiceOne] = useState(null) // Holds the first selected card
  const [choiceTwo, setChoiceTwo] = useState(null) // Holds the second selected card
  const [disabled, setDisabled] = useState(false) // Disables card selection while comparing

  // Function to shuffle and initialize the cards
  const shuffleCards = () => {
    // Duplicate and shuffle the card images
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() })); // Assign a unique ID to each card

    // Reset the game state
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }

  // Automatically start a new game when the component mounts
  useEffect(() => {
    shuffleCards()
  }, [])

  // Handle a card choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card) // Set the first or second choice
  }

  // Reset the turn after a comparison
  const resetTurn = useCallback(() => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(turns => turns + 1)
    setDisabled(false)
  }, [])

  // Compare the two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) { // Check if the cards match
        setCards(prevCard => {
          return prevCard.map(card => {
            if (card.src === choiceOne.src) return { ...card, matched: true } // Update matched state
            else return card
          })
        })
      }
      setTimeout(() => resetTurn(), 1000) // Reset the turn after a delay
    }
  }, [choiceOne, choiceTwo, resetTurn])

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;