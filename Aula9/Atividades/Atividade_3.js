let n1 = 10
let n2 = 20

// soma
console.log("Essa é a soma para operador de atribuição");
console.log(n1 = n1 + n2);
console.log(n1 += n2);
console.log(n2 += n1);

console.log("Essa é a subtração para operador de atribuição");
// subtração
console.log(n1 = n1 - n2);
console.log(n1 -= n2);
console.log(n2 -= n1);

console.log("Operadores Unários");
// Operadores Unários
let n3 = 10;
console.log(n3);

n3++;
console.log(n3);

let n4 = 20
n4--;
console.log(n4)

console.log("Operadores Binários");
//Operadores Binários
let n5 = 60;
console.log(n5 = 60);

console.log("Operadores Ternários");
let n6 = 10
let n7 = 20
resultado=(n6 > n7 ? "True" : "False");
console.log(resultado);

let n8 = 10;
resultado = (!(n8%2) ? "True" : "False")
console.log(resultado)

//ternário correção
let hora = 10;

let resultado = hora > 18 ? "Boa noite" : "Boa tarde ou Bom dia";
console.log(`O resultado da operação é ${resultado}`);