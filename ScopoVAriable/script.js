// If we create a global variable, we have to create this in the top of the code.And a function is only executed if we call this.Js Aloow to pass function as a parameter as well, like in a eventListener, it's possible pass a function and after pressing the Evenet the funcion automatically will be called. Variables exist only inside a fucntion, if we want that they become global, we create them in the top of the code and inside a function we set values for them
// Global Scope:Outside any function or block, variables  declared in global  scope  are accessible  everywhere, inside functions or blocks
// Function scope: Also called local scope, variables are accessible only inside the function
// function block: examples: if, else, for, while.. The variable are accessible only inside the block. ONLY const and let are rest
// exp1
const MyName = "levi";
function first() {
  const age = 20;
  if (age > 30) {
    const decade = 3;
    var milenial = true;
  }
  // As this second function is a child of first function and it's inside the first function, all variables created inside the first funcion can be access by the second variable, because first function has its own scopo, such as all variables outside any function can be called either first function or second function
  function second() {
    const job = "engineer";
    console.log(`${MyName} is a ${job} and is ${age}`);
  }
}
// exp2
const Birthday = () => {
  const name = "levi";
  console.log(`The birthday of ${name} is in ${Yearborn}`);
};
// If we call the function above it will say that born wasn't declarated, but if we call bellow we declarate it, the function will work out easily
const Yearborn = 2000;
//exp3
const Birthday2 = () => {
  const name = "levi";
  console.log(`The birthday of ${name} is in ${Yearborn}`);
  function example() {
    const Yearborn2 = 10;
  }
};
// If we call the function above it will say that born wasn't declarated, but if we call bellow we declarate it, the function will work out easily
const born = 2000;
//This second function example inside birthday2 cannot be called anywhere outside birthday2
