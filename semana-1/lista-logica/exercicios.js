// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------



// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------


/*

// EXERCÍCIO 01
function calculaAreaRetangulo(altura,largura) {
  // implemente sua lógica aqui
  console.log(altura*largura )
  return altura*largura

}

let altura = Number(prompt("Digite uma altura"))
let largura = Number(prompt("Digite uma largura"))

calculaAreaRetangulo(altura,largura)






// EXERCÍCIO 02
function imprimeIdade(anoAtual,anoNascimento) {
  // implemente sua lógica aqui
  return (anoAtual - anoNascimento)

}
let  anoAtual = Number(prompt("Digite o ano atual"))
let anoNascimento = Number(prompt("Digite o seu ano de nascimento"))

console.log(imprimeIdade(anoAtual, anoNascimento))






// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso/(altura*altura)

}
let peso = Number(prompt("Digite o seu peso em kg"))
let altura2 = Number(prompt("Digite sua altura em m"))

console.log(calculaIMC(peso,altura2))






// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  let nome4 = prompt("Digite seu nome")
  let idade4 = prompt("Digite sua idade")
  let email4 = prompt("Digite seu email")

  console.log(nome4,email4)

  console.log("Meu nome é "+nome4+" , tenho ",+idade4+" anos, e o meu email é "+email4+".")

}


imprimeInformacoesUsuario()








*/




// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1,cor2,cor3) {
  // implemente sua lógica aqui

  let cores = [cor1,cor2,cor3]

  console.log(cores)

}

let cor1 ="Digite sua cor preferida"
let cor2 = "Digite sua segunda cor preferida"
let cor3 = "Digite sua terceira cor preferida"

imprimeTresCoresFavoritas(cor1,cor2,cor3)













// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return string.toUpperCase()

}
let string = "Digite uma frase"
console.log(retornaStringEmMaiuscula(string))











// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo/valorIngresso

}
let custo
let valorIngresso

calculaIngressosEspetaculo(custo, valorIngresso)









// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  console.log(string1.length, string2.length)
  return string1.length == string2.length

}

let string1 = "abc"
let string2 = "abcd"

console.log(checaStringsMesmoTamanho(string1,string2))








// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

let array9 = ["a","b","c"]
console.log(retornaPrimeiroElemento(array9))



// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]

}

let array10 = ["a", "b", "c", "d"]
console.log(retornaUltimoElemento(array10))



// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let temp = array[0]
  array[0] = array[array.length -1]
  array[array.length -1] = temp
  console.log(array)

}



let array11 = ["a", "b", "c", "d"]
console.log(trocaPrimeiroEUltimo(array11))







// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let a = string1.toUpperCase()
  let b = string2.toUpperCase()
  return a === b

}

let string1a = "TestandO"
let string2a = "testando"

console.log(checaIgualdadeDesconsiderandoCase(string1a,string2a))


/*
// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = 2021
  let anoNascimento = 1992
  let identidade = 2017


  let idade = anoAtual - anoNascimento
  let idadeCarteira = anoAtual - identidade

  let condicao1 = idade < 20 &&  idadeCarteira >= 5
  let condicao2 


  console.log(condicao1 )

}

checaRenovacaoRG()

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}

*/
