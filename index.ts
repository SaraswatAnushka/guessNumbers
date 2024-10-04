// src/index.ts

// Variables for the game logic
let secretNumber: number = Math.floor(Math.random() * 100) + 1;
let attemptsLeft: number = 5;

// Access HTML elements
const guessInput = document.getElementById('guessInput') as HTMLInputElement;
const submitGuessButton = document.getElementById('submitGuess') as HTMLButtonElement;
const resultMessage = document.getElementById('resultMessage') as HTMLElement;

// Function to handle user guesses
const handleGuess = () => {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess)) {
    resultMessage.textContent = "Please enter a valid number!";
    return;
  }

  if (attemptsLeft > 0) {
    if (userGuess < secretNumber) {
      resultMessage.textContent = `Too low! You have ${--attemptsLeft} attempts left.`;
    } else if (userGuess > secretNumber) {
      resultMessage.textContent = `Too high! You have ${--attemptsLeft} attempts left.`;
    } else {
      resultMessage.textContent = `Congratulations! You guessed the number! It was ${secretNumber}.`;
      submitGuessButton.disabled = true;
    }
  }

  if (attemptsLeft === 0 && userGuess !== secretNumber) {
    resultMessage.textContent = `Game Over! The correct number was ${secretNumber}.`;
    submitGuessButton.disabled = true;
  }
};

// Add event listener to the button
submitGuessButton.addEventListener('click', handleGuess);
