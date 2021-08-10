/* Exercício 1: 
a. true
b. true
c. false
d. bool

Exercício 2:
Não é possível saber se as variáveis são da forma array ou da forma número. Se o compilador entender que é um array a saída obtida será os
algarismos de primeiroNumero juntos com os algarismos de segundoNumero. Por exemplo, se primeiroNumero = 13 e segundoNumero = 22, a saída
será 1322.  

Exercício 3:
Uma maneira de corrigir o problema é garantir que as variáveis
são numéricas, por exemplo definindo let primeiroNumero = Number(prompt("Digite um número!")) 
*/



//  Exercício 1
const idade         =   Number(prompt("Qual a sua idade?"))
const idadeAmigo    =   Number(prompt("Qual a idade do seu melhor amigo?"))
const check = idade >= idadeAmigo
const diferença = idade - idadeAmigo

console.log("Sua idade é maior que a do seu amigo?", check)
console.log("A diferença de idade é:",diferença)


//  Exercício 2
const numero = Number(prompt("Digite um número par"))
console.log(numero%2) //Caso o número seja impar o resultado será 1 ao invés de 0.


// Exercício 3
const idade = Number(prompt("Digite sua idade"))
const idadeMeses = idade * 12
const idadeDias = idadeMeses*30
const idadeHoras = idadeDias*24

console.log("Meses:",idadeMeses)
console.log("Dias:",idadeDias)
console.log("Horas:",idadeHoras)



//Exercício 4
const numero1 = Number(prompt("Digite o primeiro número"))
const numero2 = Number(prompt("Digite o segundo número"))

const teste1 = numero1 > numero2
const teste2 = numero1 === numero2
const teste3 = numero1%numero2 === 0.0
const teste4 = numero2%numero1 === 0.0

console.log("O primeiro número é maior que o segundo?", teste1)
console.log("O primeiro número é igual ao segundo?",teste2)
console.log("O primeiro número é divisível pelo segundo?",teste3)
console.log("O segundo número é divisível pelo primeiro?",teste4)


//Desafios

//Exercício 1

let tempK 
let tempF
let tempC

// a)
tempF = Number(77)
tempK = (tempF - 32)*(5/9) + 273.15
console.log(tempK, "K")

// b)
tempC = Number(80)
tempF = tempC*(9/5) + 32
tempK = (tempF - 32)*(5/9) + 273.15
console.log(tempF, "F")

// c)
tempC = Number(30)
tempF = tempC*(9/5) + 32
tempK = (tempF - 32)*(5/9) + 273.15
console.log(tempF, "F", tempK, "K")

// d)
tempC = Number(prompt("Digite uma temperatura em Celsius"))
tempF = tempC*(9/5) + 32
tempK = (tempF - 32)*(5/9) + 273.15
console.log(tempF, "F", tempK, "K")




//Exercício 2

const consumo = 280.0
const preço = 0.05
const conta = consumo * preço


//a)
console.log("O valor da conta é",conta,"reais")

//b)
const desconto = 0.15
const contaDesconto = conta*(1.0 - desconto)
console.log("O valor com desconto é",contaDesconto,"reais"  )




//Exercício 3
let kg 
let metro
let litro


//a)
const lb = 20
kg = lb * 0.453592
console.log("20 lb equivalem a" ,kg, "kg"  )

//b)
const oz = 10.5
kg = oz * 0.0283495
console.log("10.5 oz equivalem a" ,kg, "kg"  )

//c)
const milha = 100.0
metro = milha * 1609.34
console.log("100 milhas equivalem a" ,metro, "metros"  )

//d)
const pes = 50.0
metro = pes * 0.3048
console.log("50 pés equivalem a" ,metro, "metros"  )

//e)
const gal = 103.56
litro = gal * 3.78541
console.log("103.56 galões equivalem a" ,litro, "litros"  )

//f)
const xicara = 450
litro = xicara * 0.150
console.log("450 xícaras equivalem a" ,litro, "litros"  )

//f)
const xicaraUser = prompt("Digite a quantidade de xícaras")
litro = xicaraUser * 0.150
console.log(xicaraUser,"xícaras equivalem a" ,litro, "litros"  )