"use strict";

const btn = document.querySelector(".js-input");
const optionSelect = document.querySelector(".js_select_option");
const compScore = document.querySelector(".js-attempts-comp");
const userScore = document.querySelector('.js-user-score-user');
const resultMessage = document.querySelector(".js-result-message");
let attemptsCounter = document.querySelector('.js-attempts-counter');


function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
let randomNumber = getRandomNumber(100);

let computerValue = '';
let userValue = '';
let game = '';

function computerChoice () {
  if (randomNumber <= 33) {
    computerValue = "piedra";
  } else if (randomNumber >= 66) {
    computerValue = "papel";
  } else if (randomNumber <= 100) {
    computerValue = "tijera";
  }
}

let userChoice = optionSelect.value; 
  if (computerChoice === userChoice) {
    game = 'Empate &#128581';
  } else if (computerChoice === 'piedra') {
    if (userChoice === 'papel') {
      game = 'Has ganado &#127881';
      userWins();
    } else if (userChoice === 'tijera') {
      game = 'Has perdido &#128128';
      compWins();
    }
  } else if (computerChoice === 'papel') {
    if (userChoice === 'piedra') {
      game = 'Has perdido &#128128';
      compWins();
    } else if (userChoice === 'tijera') {
      game = 'Has ganado &#127881';
      userWins();
    }
  } else if (computerChoice === 'tijera') {
    if (userChoice === 'piedra') {
      game = 'Has ganado &#127881';
      userWins();
    } else if (userChoice === 'papel') {
      game = 'Has perdido &#128128';
      compWins();
    }
  }
 
 resultMessage.innerHTML = game;
 let compCounter = 0;
function compWins() { 
  compCounter++;
  compScore.innerHTML = `${compCounter}`;
}
 let userCounter = 0;
function userWins() {
 
  userCounter++;
  userScore.innerHTML = `${userCounter}`;
}

function counter() {
  let counterGame = 0;
  counterGame++;
  attemptsCounter.innerHTML = `${counterGame}`;
}

function handlerClick(ev) {
  ev.preventDefault();
  computerChoice();
  counter();  
  randomNumber = getRandomNumber(100);
}
btn.addEventListener("click", handlerClick);

//# sourceMappingURL=main.js.map
