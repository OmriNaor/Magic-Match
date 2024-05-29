# Magic Match

## Introduction

Magic Match is an interactive memory game built with React. The game features a collection of card pairs, each displaying different images. The objective is to find and match all pairs of cards with as few turns as possible. This project showcases the use of React hooks, state management, and component-based architecture.

## Features

- **Interactive Gameplay**: A fun and engaging card matching game.
- **React Hooks**: Utilizes `useState`, `useEffect`, and `useCallback` for state and lifecycle management.
- **Responsive Design**: Ensures a seamless experience across different devices.
- **Visual Feedback**: Provides immediate visual feedback for matched pairs and flips.

## Components

The application is structured into several components:

- `App.js`: The main component that initializes the game and manages state.
- `SingleCard.js`: Represents an individual card in the game, handling its flip state and display logic.
- `App.css` and `SingleCard.css`: Define the styling for the game, ensuring a visually appealing interface.

## How It Works

1. When the user opens the application, the cards are shuffled and displayed face down.
2. The user clicks on a card to flip it and reveal its image.
3. The user then clicks on a second card to try and find a matching pair.
4. If the cards match, they remain flipped. If not, they are flipped back after a short delay.
5. The game tracks the number of turns taken to match all pairs.

## Running the Application

To run the application locally:

1. Ensure you have Node.js installed.
2. Clone the repository: git clone https://github.com/yourusername/magic-match.git
3. Navigate to the project directory: cd magic-match
4. Install the dependencies: npm install
5. Start the development server: npm start
6. Open your browser and navigate to http://localhost:3000

## Example
Here’s an example of the game interface:

![Magic Match](https://github.com/OmriNaor/Magic-Match/assets/106623821/2c784b5c-3409-4280-bd3c-a0d7136ffbe2)



## Testing
To test the application, you can manually interact with the game, ensuring that:

* Cards are shuffled correctly at the start of each game.
* Card flipping behavior works as expected.
* Matching pairs stay flipped, and non-matching pairs flip back.
* The turn counter accurately reflects the number of turns taken.

## Remarks
Magic Match is a demonstration of a simple yet engaging memory game implemented using React. It showcases the power of React hooks for managing state and effects, as well as best practices for building and styling interactive components. This project serves as an excellent example for those looking to learn or improve their skills in React development.
