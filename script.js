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
