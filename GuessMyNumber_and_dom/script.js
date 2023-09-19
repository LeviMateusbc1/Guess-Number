'use strick';

//DOCUMENT.QUERRYSELECTOR: with this we acces a class or id wth document.querySelector('') if it's a class, we use point like in the example bellow, otherwise, if is a id, ude #, and message bellow is the name of the class
console.log(document.querySelector('.message').textContent);
//This command above will show us what kind of message or thing is in message, but in order to change it we can:
document.querySelector('.message').textContent = '😁 You got this number right';
// What there were inside the class .message, was changet to 😁 You got this number right.
document.querySelector('.score').textContent = 200; // The same was done here

// IN ORDER TO REALLY CHANGES SOMETHING WE USE THE EVENTLISTENER, THE WAT TO APP THIS IS THE SAME AS SAW ABOVE, APPLYING BY CLASSES. WILL HAPPEN A EVENT WHEN WE MODIFY THIS, WILL BE A REACTION. ADDEVENTLISTENER IS A FUNCTION AND DE SPECIFY WHAT THIS FUNCTION DO
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  document.querySelector('.message').textContent =
    '😁 You got this number right2';
  //After pressing this event all are here will happen, includding the text of the class message will change
});
// Notice that we are after pressing the button check creating a function which in guess take the value. this function is not called, but as soon as the event happens this function is executed

//Using css
// document.querySelector("body").style.backgroundColor = "#60b347";
//We always choose the element like above is body and dot style.backgroundColor and put the atribute inside a string, it can come backgroundColor or width, height, any css style.
