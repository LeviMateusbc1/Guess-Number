// const mist = (document.querySelector(".mysterious").textContent = "Oi");
// mist.textContent = 111;
const attempt = document.querySelector(".guess");
let sre = document.querySelector(".score");
const num = document.querySelector(".number");
sre.textContent = "30";
const OurNumber = document.querySelector(".rand");
let highSco = document.querySelector(".highScor");
const SecretNumber = Math.trunc(Math.random() * 10) + 1;
num.textContent = SecretNumber;
let TotalScore = 30;

const verify = document.querySelector(".check");
verify.addEventListener("click", () => {
  if (Number(OurNumber.value) > SecretNumber) {
    attempt.textContent = "Number too high";
    TotalScore -= 1;
    sre.textContent = TotalScore;
  } else if (Number(OurNumber.value) < SecretNumber) {
    attempt.textContent = "Number too low";
    TotalScore -= 1;
    sre.textContent = TotalScore;
  } else {
    attempt.textContent = "😁👌 You got this right";
    document.querySelector("body").classList.add("win");
    OurNumber.style.backgroundColor = "orange";
    highSco.textContent = TotalScore;
  }
});
