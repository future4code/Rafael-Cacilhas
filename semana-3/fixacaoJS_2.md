function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  
  let custo = 0
  
  if(quantidade < 12) { custo = 1.30*quantidade}
  
  if(quantidade >=12) { custo = 1.00*quantidade}
  
  return custo
}