'use strict';

// Select buttons
const optionButtons = document.querySelectorAll('.option');
const newButton = document.querySelector('.btn--new');

// Select pictures
const playerAction = document.getElementById('player--action');
const computerAction = document.getElementById('computer--action');

// Select score elements
const playerScoreEl = document.getElementById('current--player');
const computerScoreEl = document.getElementById('current--computer');

let playerScore = 0;
let computerScore = 0;
let playing = true;

const computerOptions = ['rock', 'paper', 'scissors'];

const gameLogic = {
  rock: { beats: 'scissors', losesTo: 'paper' },
  scissors: { beats: 'paper', losesTo: 'rock' },
  paper: { beats: 'rock', losesTo: 'scissors' },
};

const showChosenOptions = function (playerOption) {
  playerAction.src = `images/p_${playerOption}.jpg`;
  const computerOption =
    computerOptions[
      Math.trunc(Math.random() * (computerOptions.length - 1)) + 1
    ];
  computerAction.src = `images/c_${computerOption}.jpg`;
  return computerOption;
};

const checkWhoIsWinner = function (playerOption, computerOption) {
  if (gameLogic[playerOption].beats === computerOption) {
    playerScore += 1;
    playerScoreEl.textContent = playerScore;
    playerScoreEl.classList.add('current--winner');
    document.getElementById('name--0').classList.add('player--winner');
  } else if (gameLogic[playerOption].losesTo === computerOption) {
    computerScore += 1;
    computerScoreEl.textContent = computerScore;
    computerScoreEl.classList.add('current--winner');
    document.getElementById('name--1').classList.add('player--winner');
  }
};

const setWhiteBackground = function () {
  playerAction.src = 'images/white-background.jpg';
  computerAction.src = 'images/white-background.jpg';
};

for (let i = 0; i < optionButtons.length; i++) {
  optionButtons[i].addEventListener('click', () => {
    if (playing) {
      playing = false;
      const elemId = optionButtons[i].id;
      const computerOption = showChosenOptions(elemId);
      checkWhoIsWinner(elemId, computerOption);
      setTimeout(() => {
        setWhiteBackground();
        playerScoreEl.classList.remove('current--winner');
        computerScoreEl.classList.remove('current--winner');
        document.getElementById('name--0').classList.remove('player--winner');
        document.getElementById('name--1').classList.remove('player--winner');
        playing = true;
      }, 2000);
    }
  });
}
