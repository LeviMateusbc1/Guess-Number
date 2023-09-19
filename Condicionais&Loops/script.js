//In order to create a conditional in JS we do it like below
let Age = 17;
if(idade > 17) {
    console.log("You can drink alcohol")
}
else {
    console.log("You cam't drink alcohol")
}
//we can have == or ===, == means equal but accept string, if a have a string = "20", this conditional works, but === just accept only the number 20, not string. it happens the same to !==, >==...

if(idade > 17 && idade < 25){
    console.log("You are able to join to the arm")
}
else{
    console.log("You are not able to join to the arm")
}
// we have as well the or(ou) set as ||
if(idade > 17 || idade < 25){
    console.log("You are able to join to the arm")
}
else{
    console.log("You are not able to join to the arm")
}
//Also we have the else if which means wether the first if is true, the code doesn't  run the rest of the else if below, if one of them is true, the code stop the conditional
if(idade <=10 ){
    console.log("You are a child")
}
else if(idade >12 ){
    console.log("You are a teen")
}
else if(idade  > 18 ){
    console.log("You are a adult")
}
//notice which 17 will be true in 2 sentences above, but as we used else if, only one true will be performed
//Condicional Ternário, let's take a look at it
let isMember = true;
let frete = isMember? 15 :  45;//Is beeing asked if is member if yes the price will be 15 or else will be 45
console.log("Frete" + frete)//The frete will be 15,because ismember is true, if it was false the (frete ) will be 45. we can do it between ()
//Now let's see switch
let profession = "doctor"
switch(profession){
    case 'doctor': //If one of those statements are true, will print the console, the break end the conditional switch
        console.log("T-shirt write");
    break;
    case 'engineer': 
        console.log("T-shirt green");
    break;
    case 'PoliceMan': 
        console.log("T-shirt Blue");
    break;
    default: // If none case above  is satisfied, will perform the default.
        console.log("T-shirt black")
    break;

}
//Loops


console.log("In order to make a cake it's necessary the ingredients below : " )
let CakeRecipe = ["butter","oil","flour","eggs"]
for(let i = 0; i < CakeRecipe.length; i++){ //Here it goes till the size of the variable, in this case 4.(4) interaçoes
    console.log(CakeRecipe[i])
}
//Another way to do it is:
for(let i in CakeRecipe){ 
    console.log(CakeRecipe[i]) //It's the same as above
    CakeRecipe[i] = CakeRecipe[i].toUpperCase //here we are transforming the variables into (maiusculas)
}
//let's see the while
let number = 5
while(number<10){
    console.log(`The number now is ${number }`)
    number++
}
//In order to order a array, or (inverter) we use the command sort and reverse
let fruits = ["apple","pineaplle","strawberry","avocado"]
fruits.sort // here will put in order, according with the letters, the one which start with a will be the first...
fruits.reverse // here will (inverter)
//In order to order a object it's a bit more tricky , complicated let's see
let Personagem = [
    {car : "Fiesta", year :2022},
    {car : "Corolla", year : 2018},
    {car : "Ferrari", year : 2023}
]
Personagem.sort((a,b) =>{
    if(a.year >b.year) return 1
    else if (a.year < b.year) return -1 // Now our object ir order
    else return 0
} );
console.log(Personagem)
