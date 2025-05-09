// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;


function calcular(num1, num2, operador) {
  // TODO: implementar função
  if ( isNaN(num1) || isNaN(num2) ) {
    resultado = "Erro: parâmetros inválidos";
  }
  else {
    if (operador == "+") {
      resultado = num1 + num2;
    }
    else if (operador == "-") {
      resultado = num1 - num2;
    }
    else if (operador == "*") {
      resultado = num1 * num2;
    }
    else if (operador == "/") {
      if (num1 == 0 || num2 == 0) {
        resultado = "Erro: divisão por zero";
      }
      else { resultado = num1 / num2; }
    }
    else {
      resultado = "Erro: operação inválida";
    }
  }

  return resultado
}


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };