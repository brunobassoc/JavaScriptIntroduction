//Dado um array de números, escreva um programa para contar quantos elementos únicos existem no array(sem duplicata).
//Pesquise pelas instruções "push" e "includes", elas podem te ajudar


function contarElementosUnicos(array) {
    let unicos = []; //Array pra guardar elementos
    for (let i = 0; i < array.length; i++) {
        if (!unicos.includes(array[i])) { // Verifica se o elemento já está em let únicos
            unicos.push(array[i]); // Adiciona o elemento único ao array 'únicos
        }
    }
    return unicos.length; // Retorna o número de elementos únicos
}

// Exemplo de uso:

let numeros = [1, 2, 3, 4, 2, 3, 5, 6, 1];
console.log("Número de elementos únicos:", contarElementosUnicos(numeros));

