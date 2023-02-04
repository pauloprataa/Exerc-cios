let media = 5;

if ( media > 6  ) {
    console.log("Aprovado!");
}

if (media <= 5.9 && media > 4) {
    console.log("Recuperação");
}

if ( media < 4 ) {
    console.log("Reprovado!");
}

console.log ("Fim do código"); //não manda, porque está fora do código, justo apareceu isso porque a expressão do IF não correspondeu


    // Usando o else
let nota = 4;

if ( nota > 6  ) {
    console.log("Aprovado!");
} else {
    console.log("Reprovado!");
}

    //outro exemplo
let estaSol = false;

if (estaSol == false) {
    console.log("Está ensolarado");

} else {
    console.log("Está chovendo");
}
    // modelo de IF ELSE 
    {
    console.log("Está nublado!");
    }
    //if else
    let hora = 22;

if (hora == 10) {
    console.log("Bom dia");

} else if (hora == 15) {
    console.log("Boa tarde");
} else {
    console.log("Boa noite")
}

    //outro exemplo de if else, observe que o domingo não leva o "if"
    let dia = "domingo"; 

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

    //mais exemplos if else
    let combustivel = "teste no valor errado"; 

if ( combustivel == "gasolina" ) {
    console.log("Abastecer gasolina!");
} else if (combustivel == "alcool"){
    console.log("Abastecer alcool!");
} else if (combustivel == "diesel") {
    console.log("Abastecer Diesel")
} else{
    console.log("Valor informado esta errado, corrigir")
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
    console.log(`A multiplicação de ${numero1} por ${numero2} é igual a ${numero1 * numero2}`) //atentar a crase, pois esta com variáveis misturada

} else if (operacao == "divisao"){
    console.log("A divisão dos dois valores é " + (numero1 - numero2))
} else {
    console.log("Operação inválida, informe uma operação válida!")  //atentar a isso que é o foco do if else.
}

let numero3 = 10;
let numero4 = 10;

// Aqui temos tipos diferentes, então ele ira colocar um ao lado do outro
console.log("Alguma coisa " + (numero3 + numero4) + " Outra coisa") 

//Aqui temos tipos iguais então ele irá somar
console.log( numero3 + numero4)


//Estrutura SWITCH

        