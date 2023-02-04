//operadores de atribuição


let prato = "azul"; //atribuindo o operador azul a variavel prato - TRIBUI UM VALOR PARA UMA VARIAVVEL, somente as variaveis podem alterar o valor, somente o let - constante não pode
console.log(prato);
prato = "vermelho";
console.log(prato);

prato += "Amarelo";  //esse sinal tambem vale (+=)
console.log(prato); //unarios

//Operadores Unários
console.log(""); // para afastar
console.log("operadores unários"); //realiza algumas funções sozinhos

let n1 = 1;
console.log(n1);

n1++ //operação soma, somente dois sinais
console.log(n1)

let n2 = 20
console.log(n2);
n2--;
console.log(n2);

let n3 = 15;
n3 = n3 + 1; //isso daqui caso nao soubers fazer n3++
n3 +=1;
n3++;
n3+=4; // somando mais 4

n3 = n3 - 2;
n3-+10; //posso subtrarir
n3 --;


//exemplo com palavras
console.log("");
console.log("")

let nome = "gabriel";
let sobreNome = "nunes";
console.log(nome + sobreNome)
nome=+ "nunes"

//operadores binários
// usa no dia a dia

let n4 = 5;
console.log(n4 = 5); //operação binaria
n4++;  // operaçõ unaria

console.log("");
console.log("Operadores Ternários");
//operador ternario
//ele exige 3 operadores

let idade = 10;
let resultado = idade > 9 ? "verdadeiro" : "falso";
console.log(resultado);

let comparacao = "Gabriel" === "Gabriel" ? "é igual!" : "Não é igual!";
console.log(comparacao);




