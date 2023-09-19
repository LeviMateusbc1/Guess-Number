//Creating a function 
function gravity(a) {
    if(a===9.8){
        return console.log("Planeta terra");
    }
    else{
        return console.log("Não é a terra");
    }

}
let a = 9.8;
let var1 = gravity(a);
console.log(var1) //Here i am calling the function, and for this example the result won't be the earth
//Let exercise our knowledge in this content
/* 
(Calcule) the price of one (imóvel)
-m2 = 3000
-Se tiver 1 quarto :m2 * 1
-2 quartos m2 * 1.2
-3 quartos m2*1.5
*/
function PriceHouse(metragem,rooms){
    if(rooms === 1){
        return price = 3000 * metragem;
    }
    else if (rooms === 2){
        return price = (3000 * metragem) *1.2;
    }
    else if(rooms === 3){
        return price = (3000 * metragem ) * 1.5;
    }
}
let m2 = 123;
let room = 3;
let finalPrice = PriceHouse(m2,3);
console.log(finalPrice);
//let's cut down on (reduce), (decrease) the size of our funcion
const somar = (a,b) => a + b;//It's possible do it . We use the const.
//There are varuable of the (escopo global) which work outside the function. this variable must come outside of all functions, if we create a variable inside of one function this variable is called (local)
//It's possible as well we create a variable (global) and use one variable with the same name (local) the machine will consider the (local) in this case, in case it doesn't exist , will consider the (global)



