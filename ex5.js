let saldo = 500;
    alert("Saldo inicial: R$ " + saldo.toFixed(2));

    while (saldo > 0) {
      let saque = prompt("Digite o valor que deseja sacar:");

      if (saque > 0 && saque <= saldo) {
        saldo = saldo - saque;
        alert("Saque realizado. Saldo restante: R$ " + saldo.toFixed(2));
      } else {
        alert("Valor inválido ou maior que o saldo.");
      }
    }

    alert("Saldo esgotado. Operação encerrada.");