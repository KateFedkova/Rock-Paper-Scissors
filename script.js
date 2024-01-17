'use strict';

// Select buttons
const optionButtons = document.querySelectorAll('.option');
const newGameButton = document.querySelector('.btn--new');

// Select pictures
const playerAction = document.getElementById('player--action');
const computerAction = document.getElementById('computer--action');

// Select score elements
const playerScoreEl = document.getElementById('current--player');
const computerScoreEl = document.getElementById('current--computer');

// Select name elements
const player = document.getElementById('name--0');
const computer = document.getElementById('name--1');

// Initialize values
let playerScore = 0;
let computerScore = 0;
let playing = true;

const computerOptions = ['rock', 'paper', 'scissors'];

const gameLogic = {
  rock: {
    beats: 'scissors',
    losesTo: 'paper',
  },
  scissors: {
    beats: 'paper',
    losesTo: 'rock',
  },
  paper: {
    beats: 'rock',
    losesTo: 'scissors',
  },
};

const showChosenOptions = function (playerOption) {
  const computerOption =
    computerOptions[Math.trunc(Math.random() * computerOptions.length)];
  playerAction.src = `images/${playerOption}.jpg`;
  computerAction.src = `images/${computerOption}.jpg`;
  return computerOption;
};

const checkWhoIsWinner = function (playerOption, computerOption) {
  if (gameLogic[playerOption].beats === computerOption) {
    playerScore += 1;
    playerScoreEl.textContent = playerScore;
    playerScoreEl.classList.add('current--winner');
    player.classList.add('player--winner');
  } else if (gameLogic[playerOption].losesTo === computerOption) {
    computerScore += 1;
    computerScoreEl.textContent = computerScore;
    computerScoreEl.classList.add('current--winner');
    computer.classList.add('player--winner');
  }
};

const setWhiteBackground = function () {
  playerAction.src = 'images/white-background.jpg';
  computerAction.src = 'images/white-background.jpg';
};

const resetGame = function () {
  playing = true;
  setWhiteBackground();
  playerScoreEl.classList.remove('current--winner');
  computerScoreEl.classList.remove('current--winner');
  player.classList.remove('player--winner');
  computer.classList.remove('player--winner');
};

for (let i = 0; i < optionButtons.length; i++) {
  optionButtons[i].addEventListener('click', function () {
    if (playing) {
      const elemId = optionButtons[i].id;
      const computerOption = showChosenOptions(elemId);
      playing = false;
      checkWhoIsWinner(elemId, computerOption);
      setTimeout(() => resetGame(), 2000);
    }
  });
}

newGameButton.addEventListener('click', function () {
  playerScoreEl.textContent = 0;
  computerScoreEl.textContent = 0;
  resetGame();
});
