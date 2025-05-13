let nota = prompt("Digite uma nota entre 0 e 10 (negativo para sair):");
let somaNotas = 0;
let totalNotas = 0;

while (nota >= 0) {
  if (nota <= 10) {
    somaNotas = somaNotas + parseFloat(nota);
    totalNotas = totalNotas + 1;
  } else {
    alert("Nota inválida. Digite entre 0 e 10.");
  }
  nota = prompt("Digite uma nota entre 0 e 10 (negativo para sair):");
}

if (totalNotas > 0) {
  let media = somaNotas / totalNotas;
  alert("Média das notas: " + media.toFixed(2));
} else {
  alert("Nenhuma nota válida foi digitada.");
}
