function negativeOrPositive(num) {
    if (num === 0) {
     return "neutro"
    }

    if (num > 0) {
      return 'positivo';
    } else   {
          return 'negativo';
    }
}
console.log(negativeOrPositive(5));
console.log(negativeOrPositive(-5));
console.log(negativeOrPositive(0));
