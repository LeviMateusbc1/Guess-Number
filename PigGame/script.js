"use strict";
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
//these both ways of take an id are the same
const dice = document.querySelector(".dice");
const score1 = document.getElementById("score--1");
const Newbutton = document.querySelector(".btn--new");
const Holdbutton = document.querySelector(".btn--hold");
const Rollbutton = document.querySelector(".btn--roll");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
//starting conditions
let playing, scores, ActivePlayer, CurrentScore;
// We have to set these values here because if we declarate them inside a function they will exist only inside the function, then, we declarate here and set values for them in the function bellow
const init = () => {
  CurrentScore = 0;
  ActivePlayer = 0;
  scores = [0, 0];
  playing = true;
  document
    .querySelector(`.player--${ActivePlayer}`)
    .classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--active");
  player0.classList.add("player--active");
  dice.classList.add("hidden");
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  console.log("sssss");
};
init();
const switchPlayer = () => {
  document.getElementById(`current--${ActivePlayer}`).textContent = 0;
  CurrentScore = 0;
  ActivePlayer = ActivePlayer === 0 ? 1 : 0;
  //If activePlayer = 0  will turn to one, if it's one will turn to zero
  // A expressão ActivePlayer === 0 verifica se o valor atual da variável ActivePlayer é igual a 0.
  // O operador ternário ? é usado para criar uma expressão condicional. Se a condição ActivePlayer === 0 for verdadeira (ou seja, se ActivePlayer for igual a 0), o valor após ? (neste caso, 1) será atribuído à variável ActivePlayer. Se a condição for falsa, o valor após : (neste caso, 0) será atribuído à variável ActivePlayer.
  player0.classList.toggle("player--active");
  //If player0 is active will turn thiis off,
  player1.classList.toggle("player--active");
  // If player1 is turned off we will turn it on
};

Rollbutton.addEventListener("click", function () {
  if (playing) {
    //Generating a random dice roll
    const randomDice = Math.trunc(Math.random() * 6) + 1;
    // Display dice
    dice.classList.remove("hidden");
    dice.src = `dice-${randomDice}.png`;
    if (randomDice !== 1) {
      CurrentScore += randomDice;
      document.getElementById(`current--${ActivePlayer}`).textContent =
        CurrentScore;
    } else {
      switchPlayer();
    }
  }
});
Holdbutton.addEventListener("click", function () {
  if (playing) {
    scores[ActivePlayer] += CurrentScore;
    document.getElementById(`score--${ActivePlayer}`).textContent =
      scores[ActivePlayer];
    if (scores[ActivePlayer] >= 30) {
      document
        .querySelector(`.player--${ActivePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${ActivePlayer}`)
        .classList.remove("player--active");
      dice.classList.add("hidden");
      playing = false;
    } else {
      switchPlayer();
    }
  }
});
Newbutton.addEventListener("click", init);
