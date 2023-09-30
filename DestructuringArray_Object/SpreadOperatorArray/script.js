const restaurant = {
  name: "",
};
// A normal way to do this would be :
const array = [1, 2, 3];
const array2 = [-2, -1, 0, array[0], array[1], array[2]];
console.log(array2); //Will print: -2,-1,0,1,2,3...

// WIth spread operator we can do this like this:

const array3 = [-2, -1, 0, ...array]; //this array will be exactly the same as array2, that means which use ...ArrayName will return the values which is inside the array passed
