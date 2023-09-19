let array = [1, 2, "levi", true];
console.log(array[0]); //Over here will show the first value of the array
console.log(array[1]); // Will show the 2, the second value of the array
let array2 = [1, 3, array]; //It's possible put one array inside another array
console.log(array[2]); //as i am printing the field 3, will print the array which is in this position
//in order to know the size of the array we do it :
console.log(array2.length); //size 3
//in order to addd another item inside the array we use :push
array2.push(3);
//in order to remove we can use pop and shift
/*
pop = remove the last one
shift = remove the first one
*/
array2.shift; //Will remove the first(elemento)

const friends = ["levi", "Evilyn", "Joao"];
console.log("friends.length"); // The answer here will be 3
friends[2] = "Jose"; //It can be done with no problems, in array it's mutate

//Methods array

array2.push(3);
//in order to remove we can use pop and shift
/*
pop = remove the last one
shift = remove the first one
*/
array2.unshift; //Will add an element in the  first position
array2.pop(); //Remove the last element
array2.shift(); //Will remove the first element
//Includes return to us if one element is in the array or not

//Let's see object, it's a bit different of array, at first we use { } insted of []
let object = {
  Name: "Levi",
  Age: 19,
  country: "Brazil",
  strength: 20,
};
console.log(
  object.Name,
  "is",
  object.Age,
  `is from ${object.country} has ${object.strength} of strength`
);
//Object inside object
let object2 = {
  Name: "Levi",
  Age: 19,
  country: "Brazil",
  feature: {
    strength1: 15,
    magic: 25,
    speed: 35,
  },
};
console.log(
  object2.Name,
  "is",
  object2.Age,
  `is from ${object2.country} has ${object2.feature.magic} of magic`
);
