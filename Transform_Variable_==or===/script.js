//We can convert one variable into to other, for example, transform string into a number
//Example 1
const inputYear = "1991";
console.log(Number(inputYear));
console.log(inputYear + 18);
const inputYear2 = "Jonas";
console.log(Number(inputYear2));
//If we try to convert this  won't work, because is a string name and not number
// and we can convert a number into a string as well
// 5 falsy values: 0 , ''(Empyt value),undefined,null,NaN
// Be careful when talk about this, cuzy use falsy values may be a problem
let height = 0;
if (height) {
  console.log("Height defined ");
} else {
  console.log("Undefined height");
}

// == vs ===
// 5 == "5"; // true, porque o JavaScript converte a string em número
// null == undefined; // true, porque ambos são considerados "falsos"
// 5 === "5"; // false, porque eles são de tipos diferentes
// null === undefined; // false, porque eles são de tipos diferentes
// Em resumo, a principal diferença entre == e === está na coerção de tipo. O uso de === é geralmente preferido porque é mais previsível e menos propenso a erros, especialmente quando se trata de comparações de tipos diferentes. É uma boa prática usar === para evitar surpresas inesperadas em seu código JavaScript.
