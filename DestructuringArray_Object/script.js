const array = [2, 3, 4];
const retaurant = {
  location: "vegas",
  name: "Italian food",
  mainMenu: ["pizza", "pasta", "eggs"],
  starterMenu: ["foccacia", "garlic", "bread"],
  order: function (MainIndex, StarterIndex) {
    return [this.mainMenu[MainIndex], this.starterMenu[StarterIndex]]; //Setting a function inside a object
  },
};
const a = array[0];
const b = array[1];
const c = array[2];

//How Destructure an array works?

const [x, y, z] = array; // we will have all values of array, unpacked
console.log(x, y, z);
const [elem1, elem2] = retaurant.mainMenu; //Like this will take element one and two, if we wanted take the first element of mainMenu and the third, we could skip the second like this:
const [first2, , second2] = retaurant.mainMenu; // the first will be pizza and the second here will be eggs

//switch variables with array destructur

// with the example above, let's switch first to second with destructuring arrays
[elem1, elem2] = [elem2, elem1]; //Right, they will be changed after this
console.log(elem1, elem2);

//Destructuring a function inside an array

// Using the function above, If we call it  like this is the normal way to do this, and will return an array:
console.log(retaurant.order(2, 1)); //Will take the element 3 of the Mainmenu and element 2 of starterMenu, this will rturn an array
const [startertest, Maintest] = retaurant.order(2, 1);

//Destructuring inside destructuring

const nested = [2, 4, [5, 6]];
//Let's destructure this
const [i, , [j, k]] = nested; //It will receive 2,5 and 6. we can check it out with the console.log
console.log(i, j, k);

//Destructuring an default
const [p = 1, q = 1, r = 1] = [8, 5]; //pq and q will receive 8 and 5, but could receive any value, besides, r will receive 1

//Destructuring objects
// Using the declarations above, let's show one example of this:
const { location, name, mainMenu } = retaurant; // If we perform console.log will appear the value of these  elements inside the array restaurant

// We can also destructuring arrays like this:

const { location: place1, name: restaurantName, mainMenu: menus } = retaurant;
//Then, location,name and Mainmenu now are stored in these variables created

// Default values with objects

const { menu = [], starterMenu: starters = [] } = retaurant; //This is how we set default values, when there isn't a value and we set it's like this, in the real world of programing we always use this

//Switching variables
let d = 100;
let e = 200;
const obj = { d: 23, e: 10 };
({ d, e } = obj); // If we console this will return the new values of d and e
