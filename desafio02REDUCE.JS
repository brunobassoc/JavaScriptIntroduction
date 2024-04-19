
//Dado uma array de números, escreva um programa para encontrar o maior valor no array
//Você pode utilizar o loop FOR com a propriedade length ou utilizar reduce.

//Utilizando REDUCE


function encontrarMaiorValor(array) {
    return array.reduce((maior, atual) => maior > atual ? maior : atual, array[0]);
}

let numeros = [6, 32, 0, 1, 11];
console.log("Maior valor:", encontrarMaiorValor(numeros)); 