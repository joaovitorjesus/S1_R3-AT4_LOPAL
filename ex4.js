let nome = prompt("Digite seu primeiro nome:");
while (nome === "") {
  nome = prompt("Digite seu primeiro nome:");
}

let sobrenome = prompt("Digite seu sobrenome:");
while (sobrenome === "") {
  sobrenome = prompt("Digite seu sobrenome:");
}

alert("Nome completo: " + nome + " " + sobrenome);