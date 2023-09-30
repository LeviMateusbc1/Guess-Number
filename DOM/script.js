DOM : Allow JavaScript to acces html elements and css styles to manipulate them
With document.querrySelector we can enter in html, let's see the difference between element and text:
All tags : div, a,html,body,header,img,section are elements, but a text inside a tag is only a text. example <h1>Hello world</h1>, h1 is a element and hello world only a text
Dom is not a part of JavaScript language, dom is a web api, we acces trougth JavaScript
Using css

document.querySelector("body").style.backgroundColor = "#60b347";
We always choose the element like above is body and dot style.backgroundColor and put the atribute inside a string, it can come backgroundColor or width, height, any css style.

document.querySelectorAll(".exp1").style.backgroundColor = "#60b347";
all classes exp 1 will receive what are being applied here, because was used querrySelectorAll.

// In the code bellow we remove some class which exist, we can remove a class which has a display none for example
modal.classList.remove("hidden");
modal.classList.add("hidden")// add a class

//We can take the value of an input with onde event clicking in a button, if we dont use value it will take the input and not the element
const guess = (document.querySelector(".guess").value); //Gues here is an input and we are taking the value that was written in the input.
const guess = Number(document.querySelector(".guess").value); // If we wanna take the value and compare to other values, we have to specify and pass the parametro Number, if we do if(guess === 5) without the number we won't compare, but when we take the number then will really compare, even if we print and we have the value if we don t put number before the expresson it won't work out

//The eventListener will happen something after pressing the element which is being pressing, what is in the function will happen
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  // This function give us which key was pressed in the keyboard, if we console only  console.log(e);
  //Will give a=us a lot of information, but with e.key will return us only the key that was pressed

  modal.classList.contains("hidden")
//Return to us wether this class is activeted or not

  if (e.key === "Escape" && !modal.classList.contains("hidden")) 

// We use this is the same as get the element with querySelector, but here it's not necessary to put the hash (#)
  const score1 = document.getElementById("score--1");

  const AnyNumber  = Math.trunc(Math.random() * 6 +1)
  //This Math generate a random numberm trunch take only inteiros numbers amoung 1 to 6

//Change sources by JavaScript
dice.src = `dice-3.png`; //Suppose that there are 5 dices, all with dice-1,dice-2.. and the one which appears in html is dice-1. doing this will appear dice-3 instead

//If the class player--active is actived in player0, it will be turned off, if is turned off will be turned on
player0.classList.toggle(".player--active");
