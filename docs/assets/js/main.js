"use strict";const btn=document.querySelector(".js-input"),optionSelect=document.querySelector(".js_select_option"),compScore=document.querySelector(".js-attempts-comp"),userScore=document.querySelector(".js-attempts-user"),resultMessage=document.querySelector(".js-result-message");let attemptsCounter=document.querySelector(".js-attempts-counter"),compCounter=0,userCounter=0,counterGame=0,game="";function getRandomNumber(){return Math.ceil(100*Math.random())}function selectionComputer(){let e="",t=getRandomNumber(100),n=optionSelect.value;t<=33?e="piedra":t>=66?e="papel":t<=100&&(e="tijera"),e===n?game="Empate &#128581":"piedra"===e?"papel"===n?(game="Has ganado &#127881",userWins()):"tijera"===n&&(game="Has perdido &#128128",compWins()):"papel"===e?"piedra"===n?(game="Has perdido &#128128",compWins()):"tijera"===n&&(game="Has ganado &#127881",userWins()):"tijera"===e&&("piedra"===n?(game="Has ganado &#127881",userWins()):"papel"===n&&(game="Has perdido &#128128",compWins()))}function computerChoice(){selectionComputer(),resultMessage.innerHTML=""+game}function compWins(){compCounter++,compScore.innerHTML=""+compCounter}function userWins(){userCounter++,userScore.innerHTML=""+userCounter}function counter(){counterGame++,attemptsCounter.innerHTML=""+counterGame}function handlerBtn(e){e.preventDefault(),computerChoice(),counter()}btn.addEventListener("click",handlerBtn);