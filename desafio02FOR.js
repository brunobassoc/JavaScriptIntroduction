//Dado uma array de números, escreva um programa para encontrar o maior valor no array
//Você pode utilizar o loop FOR com a propriedade length ou utilizar reduce.

//Utilizando FOR


function encontrarMaiorValor(array) {
    let maior = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}

// Exemplo de uso:
let numeros = [3, 7, 2, 9, 5];
console.log("Maior valor:", encontrarMaiorValor(numeros));