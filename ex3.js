let totalCompra = 0;
    let valor = prompt("Digite o valor da compra (0 para encerrar):");

    while (valor != 0) {
      if (valor > 0) {
        totalCompra = totalCompra + parseFloat(valor);
      }
      valor = prompt("Digite o valor da compra (0 para encerrar):");
    }

    alert("Total da compra: R$ " + totalCompra.toFixed(2));