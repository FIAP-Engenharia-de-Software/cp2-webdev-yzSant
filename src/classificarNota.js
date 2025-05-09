// Classificador de Nota (1 ponto)

// **Enunciado:**

// Implemente a função classificarNota, que receba uma nota e:

// - Retorna `"Aprovado"` se nota ≥ 6;
// - Retorna `"Reprovado"` se nota < 6;
// - Retorna `"Nota inválida"` se for um valor fora de 0 a 10 ou não numérico.

function classificarNota(nota) {
  // TODO: implementar função
  if (nota <= 10 && nota >= 6){
    estado = "Aprovado"
  }
  else if (nota < 0 || nota > 10){
    estado = "Nota inválida"
  }
  else if(isNaN(nota)){
    estado = "Nota inválida"
  }
  else{
    estado = "Reprovado"
  }
  return estado
}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { classificarNota };