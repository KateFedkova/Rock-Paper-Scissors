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

btnRock.addEventListener('click', function () {
  playerAction.src = 'images/p_rock.jpg';
  const action = 'rock';
  const option =
    computerOptions[
      Math.trunc(Math.random() * (computerOptions.length - 1)) + 1
    ];
  computerAction.src = `images/c_${option}.jpg`;
});
