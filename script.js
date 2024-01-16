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

const checkWhoIsWinner = function (playerOption, computerOption) {
  console.log(playerOption, computerOption);
  if (gameLogic[playerOption]['beats'] === computerOption) {
    playerScore += 1;
    playerScoreEl.textContent = playerScore;
  } else if (gameLogic[playerOption]['losesTo'] === computerOption) {
    computerScore += 1;
    computerScoreEl.textContent = computerScore;
  }
};

btnRock.addEventListener('click', function () {
  playerAction.src = 'images/p_rock.jpg';
  const action = 'rock';
  const option =
    computerOptions[
      Math.trunc(Math.random() * (computerOptions.length - 1)) + 1
    ];
  computerAction.src = `images/c_${option}.jpg`;
  checkWhoIsWinner(action, option);
});

btnPaper.addEventListener('click', function () {
  playerAction.src = 'images/p_paper.jpg';
  const action = 'paper';
  const option =
    computerOptions[
      Math.trunc(Math.random() * (computerOptions.length - 1)) + 1
    ];
  computerAction.src = `images/c_${option}.jpg`;
  checkWhoIsWinner(action, option);
});

btnScissors.addEventListener('click', function () {
  playerAction.src = 'images/p_scissors.jpg';
  const action = 'scissors';
  const option =
    computerOptions[
      Math.trunc(Math.random() * (computerOptions.length - 1)) + 1
    ];
  console.log(option, action);
  computerAction.src = `images/c_${option}.jpg`;
  checkWhoIsWinner(action, option);
});
