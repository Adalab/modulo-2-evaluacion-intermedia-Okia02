"use strict";

const btn = document.querySelector(".js-input");
const optionSelect = document.querySelector(".js_select_option");
const attempts = document.querySelector(".js-attempts");
const resultMessage = document.querySelector("js-result-message");


function getRandomNumber() {
  return Math.ceil(Math.random() * 100);
}

function computerChoice() {  
  const randomNumber = getRandomNumber();
  let computerValue = '';
  if (randomNumber <= 33) {
    computerValue = "piedra";
  } else if (randomNumber >= 66) {
    computerValue = "papel";
  } else if (randomNumber <= 100) {
    computerValue = "tijera";
  }
  return computerValue;
}

function userChoice() {
  const userValue = optionSelect.value;
  if (userValue === 'piedra' && computerValue === 'piedra' ) {
resultMessage.innerHTML = '';
  }
}

function handlerClickBtn(ev) {
  ev.preventDefault();
  gameResult();
  counterGame();
}

btn.addEventListener("click", handlerClickBtn);

//# sourceMappingURL=main.js.map
