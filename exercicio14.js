//solicita o nome do usuário
let nome = prompt("Digite sei nome: ");

//solicita o sobrenome do usuário
let sobrenome = prompt("Digite seu sobrenome: ");

if (nome.trim() === "" || sobrenome.trim() === "") {
    alert("Nome ou sobrenome não preenchido!");
} else {
    // Imprime o nome completo do usuário
    alert(`O nome completo do usuário é: ${nome} ${sobrenome}`);
}

