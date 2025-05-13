let numero = prompt("Digite um número positivo:");
    while (numero < 0) {
      numero = prompt("Digite um número positivo:");
    }
    alert("Número válido: " + numero);
