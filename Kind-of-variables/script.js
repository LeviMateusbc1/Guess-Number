alert("Hello WEEE"); //If we perform it here will show on output but we will see it on google, as soon as we enter in the link which lead us to this page, will show up this message
//we can as well do this in inspecionar and console. will change the alert(em tempo real)
console.log("Hello world 2"); //When prees in (inspecionar)  this code hello world will show there on console
//Let's create varuables here in JavaScript
let Age = 22; //This kind of data is called number
let Name = "Levi mateus"; //This kind of data is called String
console.log(Name);
let logado = true; //or false, this kind of data is boolean
let lista = ["ovo", "butter", "salt"]; //this kind of data is Array,or (vetor), in this case, it's a string array but can be a number array as well
let lista2 = [3, 5, 6];
let template = `Levi Mateus`; //Template string:It's equal a normal string the difference it's: para concatenar na string usa :"Ola" + nome + bem vindo, já em template string usa: ``${nome} bem vindo.``
let NomeCompleto = { nome: "Evilyn", Age: 33 }; //this is called object(objeto)
//In JavaScript we hape to use the varuable let and the name and the kind(list,array,string...)
//In order to know  a varuable name, he wwave to use the command  below
console.log(typeof logado); // if we run it will show the kind of data  which are storage on logado when we see on(inspecionar)
console.log(Name);
console.log(Age);
//                          Differences between let, const and var
//With let we can set a value and later change this value.
//The value will be changed
let value = "String";
console.log(value);
value = "string2";
console.log(value);
//Var will be the same, we can set values and change it, the difference is:var: Variáveis declaradas com var têm escopo de função. Isso significa que elas são visíveis e acessíveis apenas dentro da função em que foram declaradas.
// let: Variáveis declaradas com let têm escopo de bloco. Isso significa que elas são visíveis e acessíveis apenas dentro do bloco (delimitado por chaves {}) em que foram declaradas, seja uma função, um loop ou qualquer outro bloco.

// example:
// function exemplo() {
//     if (true) {
//       var variavelVar = "Eu sou var";
//       let variavelLet = "Eu sou let";
//     }
//     console.log(variavelVar); // Acessível
//     console.log(variavelLet); // ReferenceError: variavelLet não está definido
//   }
//Difference 2, var is global, só a declaração, se você printar e depois definir irá resltar um valor indefinido, mas a variavél será criada. Já o var se printarmos e depois definirmos não será definido nem o valor atribuido a variavel nem a variavel.
//Example:
// console.log(variavelVar); // indefinido
// var variavelVar = "Eu sou var";

// console.log(variavelLet); // ReferenceError: Não é possível acessar 'variavelLet' antes da inicialização
// let variavelLet = "Eu sou let";
//The const isn't possible to set a value and change it afterwards

//Operações em variaveis: string and template string
let name1 = "levi";
let name2 = "Mateus";
let CompleteName = name1 + "" + name2; //Will link both names
console.log(CompleteName);
let name3 = `${name1} ${name2} da silva`;
console.log(name3);
let age3 = 13;
let idadeString = ` Minha idade é ${age3 + 2} `; // esse operador  {} é um operador, pode-se fazer operações dentro dele.
console.log(idadeString);
