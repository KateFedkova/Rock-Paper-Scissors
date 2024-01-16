'use strict';

// Select option buttons
const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissors = document.getElementById('scissors');

// Select pictures
const playerAction = document.getElementById('player--action');
const computerAction = document.getElementById('computer--action');

// Select score elements
const playerScoreEl = document.getElementById('current--player');
const computerScoreEl = document.getElementById('current--computer');

let playerScore = 0;
let computerScore = 0;

const computerOptions = ['rock', 'paper', 'scissors'];

const gameLogic = {
  'rock': { 'beats': 'scissors', 'losesTo': 'paper' },
  'scissors': { 'beats': 'paper', 'losesTo': 'rock' },
  'paper': { 'beats': 'rock', 'losesTo': 'scissors' },
};

const showChosenOptions = function (playerOption) {
  playerAction.src = `images/p_${playerOption}.jpg`;
  const computerOption =
    computerOptions[
      Math.trunc(Math.random() * (computerOptions.length - 1)) + 1
    ];
  computerAction.src = `images/c_${computerOption}.jpg`;
  return computerOption
} 


const checkWhoIsWinner = function (playerOption, computerOption) {
  if (gameLogic[playerOption]['beats'] === computerOption) {
    playerScore += 1;
    playerScoreEl.textContent = playerScore;
  } else if (gameLogic[playerOption]['losesTo'] === computerOption) {
    computerScore += 1;
    computerScoreEl.textContent = computerScore;
  }
};

btnRock.addEventListener('click', () => {
  const computerOption = showChosenOptions('rock');
  checkWhoIsWinner('rock', computerOption); 
});

btnPaper.addEventListener('click', () => {
  const computerOption = showChosenOptions('paper');
  checkWhoIsWinner('paper', computerOption)
});

btnScissors.addEventListener('click', () => {
  const computerOption = showChosenOptions('scissors');
  checkWhoIsWinner('scissors', computerOption)
});
