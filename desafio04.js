const pessoas = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 17 },
    { nome: "Gilberto", idade: 20 },
    { nome: "Leonardo", idade: 21 },
    { nome: "Maria", idade: 16 },
    { nome: "Isabel", idade: 15 }
];


for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].idade > 18) {
        console.log('pessoas[i].nome é maior de idade.');
    }
}




//const maioresDe18 = pessoas.filter(pessoa => pessoa.idade > 18);
//console.log(maioresDe18);