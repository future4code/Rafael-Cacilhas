function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  
  let notaFinalNumero = (ex*1 + p1*2 + p2*3 )/ 6
  let notaFinal = "D"
  
  if(notaFinalNumero >= 6.0) {notaFinal = "C"}
  if(notaFinalNumero >= 7.5) {notaFinal = "B"}
  if(notaFinalNumero >= 9.0) {notaFinal = "A"}
  
  return notaFinal
}