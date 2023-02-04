let media = 6;
if ( media = 6 ) {
console.log("isso vai aparecer");

}

//Estrutura condicional IF

let dia = "quinta"; 

if ( dia == "segunda" ) {
    console.log("Hoje é segunda-feira!"); 
} else if (dia == "terça"){
    console.log("Hoje é terça-feira!");
} else if (dia == "quarta"){
    console.log("Hoje é quarta-feira!");
} else if (dia == "quinta"){
    console.log("Hoje é quinta-feira!");
} else if (dia == "sexta"){
    console.log("Hoje é sexta-feira!");
} else if (dia == "sábado"){
    console.log("Hoje é sábado!");
} else {
    console.log("Hoje é domingo!");
}


// Exemplo Calculadora

let operacao = "soma";
let numero1 = 10;
let numero2 = 5;

if ( operacao == "soma" ) {
    console.log("Operação de soma " + (numero1 + numero2));

} else if (operacao == "subtracao"){
    console.log("A subtração dos dois valores é " + (numero1 - numero2));

} else if (operacao == "multiplicacao"){
    console.log(`A multiplicação de ${numero1} por ${numero2} é igual a ${numero1 * numero2}`)

} else if (operacao == "divisao"){
    console.log("A divisão dos dois valores é " + (numero1 - numero2))
} else {
    console.log("Operação inválida, informe uma operação válida!")
}

let numero3 = 10;
let numero4 = 10;

// Aqui temos tipos diferentes, então ele ira colocar um ao lado do outro
console.log("Alguma coisa " + (numero3 + numero4) + " Outra coisa") 

//Aqui temos tipos iguais então ele irá somar
console.log( numero3 + numero4 + numero5)



//Estrutura condicional IF

let combustivel = "gasolina"; 

if ( combustivel == "gasolina" ) {
    console.log("Abastecer gasolina!");
} else if (combustivel == "alcool"){
    console.log("Abastecer alcool!");
} else {
    console.log("Abastecer Diesel")
}
//Estrutura condicional IF

let combustivel = "alcool"; 

if ( combustivel == "gasolina" ) {
    console.log("Abastecer gasolina!");
} else if (combustivel == "alcool"){
    console.log("Abastecer alcool!");
} else if (combustivel == "diesel"){
    console.log("Abastecer Diesel")
} else {
    console.log("Valor informado é inválido, favor informe outro valor")
