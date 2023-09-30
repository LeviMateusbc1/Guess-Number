<<<<<<< HEAD
let variable1 = 50;
console.log(variable1);
alert("Hello JS");
console.log(typeof variable1); //This will return the type of the variable
=======
"use strick";
let SecretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 30;
let highScore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "no number 😣";
  } else if (guess > SecretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        " Wrong answer 😕 number too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      score = 0;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "you lost the game 😥";
    }
  } else if (guess < SecretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "Wrong answer 😑 number too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      score = 0;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "you lost the game 😥";
    }
  } else if (guess === SecretNumber) {
    document.querySelector(".message").textContent = "Correct answer 😁🤗";
    document.querySelector(".number").textContent = SecretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  SecretNumber = Math.trunc(Math.random() * 23) + 1;
  score = 30;
  document.querySelector(".message").textContent = " Start guessing..";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#5749d6";
  document.querySelector(".number").style.width = "15rem";
});
//teste
>>>>>>> 519674445c8d17fb3a6a5591e49260a27ba0d457
