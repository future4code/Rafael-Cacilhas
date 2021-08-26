ˋˋˋfunction calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
  const fixo = 2000
  const comicaoFixa = 100
  const comicaoCarro = (5/100)
  
  let salario = qtdeCarrosVendidos* comicaoFixa + valorTotalVendas*comicaoCarro + fixo
  

  return salario
}```