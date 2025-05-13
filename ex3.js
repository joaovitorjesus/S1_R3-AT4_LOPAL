let totalCompra = 0;
let valor = parseFloat(prompt("Digite o valor da compra (0 para encerrar):"));

while (valor > 0 || valor < 0) {
  if (valor > 0) {
    totalCompra = totalCompra + valor; 
  }
  valor = parseFloat(prompt("Digite o valor da compra (0 para encerrar):"));
}

alert("Total da compra: R$ " + totalCompra.toFixed(2));