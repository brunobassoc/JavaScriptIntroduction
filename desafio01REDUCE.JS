function calcularSoma(array) {
    return array.reduce((acumulador, atual) => acumulador + atual, 0);
}

// Exemplo de uso:
let numeros = [1, 2, 3, 4, 5];
console.log("Soma:", calcularSoma(numeros)); // Saída: Soma: 15
