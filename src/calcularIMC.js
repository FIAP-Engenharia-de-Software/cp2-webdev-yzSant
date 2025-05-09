// ## Calculadora de IMC (1 ponto)

// **Enunciado:**

// Crie a função calcularIMC que receba peso e altura e retorne:

// - `"Abaixo do peso"` se < 18.5
// - `"Peso normal"` se entre 18.5 e 24.9
// - `"Sobrepeso"` se entre 25 e 29.9
// - `"Obesidade"` se ≥ 30
// - `"Erro"` para dados inválidos

// **Fórmula IMC**: peso / (altura * altura)

function calcularIMC(peso, altura) {
  // TODO: implementar função
  imc = peso / (altura * altura)
  if (imc < 18.5){
    fim = "Abaixo do peso"
  }
  else if (imc <= 18.5 && imc <= 24.9){
    fim = "Peso normal"
  }
  else if (imc <= 25 && imc <= 29.9){
    fim = "Sobrepeso"
  }
  else if (imc <= 30){
    fim = "Obesidade"
  }
  else if(altura === 0 ){
    fim = "altura zero"
  }
  else if(isNaN(peso) || isNaN(altura)){
    fim = "Erro"
  }
  return fim
}

// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularIMC };