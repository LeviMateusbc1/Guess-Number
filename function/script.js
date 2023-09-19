"use strick";
alert("hello guys");

function login(name) {
  console.log(name + "Wanna log in?");
}
login("Levi");
// We can create functions as well like this,
const FindYourAge = function (BirthYear, CurrentYear) {
  return console.log("Your age is ", CurrentYear - BirthYear);
};
const age = FindYourAge(2000, 2023);
console.log(age);
// Arrow functions
const FindYourAge2 = (BirthYear2) => CurrentYear2 - BirthYear2;
// It works and is the simplest form of doing this, when there's only one parameter, and the return can be removed if there's only one line of code
const FindYourAge3 = (BirthYear3, CurrentYear3) => {
  return console.log("Your age is ", CurrentYear3 - BirthYear3);
  // This works as well
};
