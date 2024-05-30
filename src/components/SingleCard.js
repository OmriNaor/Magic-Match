// SingleCard component
import React from 'react'
import './SingleCard.css';

// SingleCard component props: card, handleChoice, flipped, and disabled
export default function SingleCard({ card, handleChoice, flipped, disabled }) {

  // Handle card click
  const handleClick = () => {
    if (!disabled) handleChoice(card) // Call handleChoice if not disabled
  }

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src={"/img/cover.png"} onClick={handleClick} alt="card back" />
      </div>
    </div>
  )
}