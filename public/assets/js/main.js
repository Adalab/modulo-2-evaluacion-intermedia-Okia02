"use strict";

const btn = document.querySelector(".js-input");
const optionSelect = document.querySelector(".js_select_option");
const compScore = document.querySelector(".js-attempts-comp");
const userScore = document.querySelector('.js-attempts-user');
const resultMessage = document.querySelector(".js-result-message");
let computerValue = '';
let game = '';
let attemptsCounter = document.querySelector('.js-attempts-counter');


function getRandomNumber() {
  return Math.ceil(Math.random() * 100);
}



function computerChoice () {
  let randomNumber = getRandomNumber(100);
  let userChoice = optionSelect.value;
  if (randomNumber <= 33) {
    computerValue = "piedra";
  } else if (randomNumber >= 66) {
    computerValue = "papel";
  } else if (randomNumber <= 100) {
    computerValue = "tijera";
  }
  if (computerValue === userChoice) {
    game = 'Empate &#128581';
  } else if (computerValue === 'piedra') {
    if (userChoice === 'papel') {
      game = 'Has ganado &#127881';
      userWins();
    } else if (userChoice === 'tijera') {
      game = 'Has perdido &#128128';
      compWins();
    }
  } else if (computerValue === 'papel') {
    if (userChoice === 'piedra') {
      game = 'Has perdido &#128128';
      compWins();
    } else if (userChoice === 'tijera') {
      game = 'Has ganado &#127881';
      userWins();
    }
  } else if (computerValue === 'tijera') {
    if (userChoice === 'piedra') {
      game = 'Has ganado &#127881';
      userWins();
    } else if (userChoice === 'papel') {
      game = 'Has perdido &#128128';
      compWins();
    }
  }  
  resultMessage.innerHTML = `${game}`;
  console.log(computerValue);
}


 let compCounter = 0;
function compWins() {   
  compCounter++;
  compScore.innerHTML = `${compCounter}`;
  console.log('computadora');
}
  let userCounter = 0;
function userWins() {  
  userCounter++;
  userScore.innerHTML = `${userCounter}`;
  console.log('jugadora');
}
 let counterGame = 0;
function counter() { 
  counterGame++;
  attemptsCounter.innerHTML = `${counterGame}`;
  
}

function handlerBtn(ev) {
  ev.preventDefault();
  computerChoice();
  counter();  
}
btn.addEventListener("click", handlerBtn);

//# sourceMappingURL=main.js.map
