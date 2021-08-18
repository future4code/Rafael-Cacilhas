/*

Exercício 1
Está calculando a soma dos 5 primeiros números naturais e mostrando o resultado final no console

Exercício 2
a) 19 21 23 25 27 30
b) Sim, basta usar o comando console.log(lista.indexOf(numero)). No entanto imagino que usar o for of neste caso faça com que
o tempo para rodar o programa seja dependente de 2n, o que é ineficiente.

Exercício 3
*
**
***
****

*/

//  Exercício 1



const numero = 3
let i = 0 
let pets = []

//a)
if (numero === 0) {
    console.log("Que pena! Você deveria adotar um pet!")
}

//b)
else {
    for (i = 1; i <= numero; i++) {
        pets[i-1] = i
    }
}

//c)
console.log("Nome dos pets: ",pets)



// Exercício 2

let arrayOriginal = ["32","2314","453","6","786758"]
console.log("Array original:")
// a) 
for (i = 0; i < arrayOriginal.length ; i++){
    console.log(arrayOriginal[i])
}

// b) 
console.log("Array original dividido por 10:")
for (i = 0; i < arrayOriginal.length ; i++){
    console.log(arrayOriginal[i]/10)
}

// c)
console.log("Valores pares do")
let novoArray = []
let j = 0

for (i = 0; i < arrayOriginal.length ; i++){

    if(arrayOriginal[i] % 2 === 0 ) {
        novoArray[j] =  arrayOriginal[i]
        j = j + 1
    }

}

console.log(novoArray)


// d)
let ultimoArray = []
j = 0
console.log("O novo array é: ")
for (i = 0; i < arrayOriginal.length ; i++){
    
    ultimoArray[i] = "O elemento do índex  "+i+" é: "+arrayOriginal[i]
}

console.log(ultimoArray)


// e)
let maiorNumero = arrayOriginal[0]
let menorNumero = arrayOriginal[0]

for (i = 0; i < arrayOriginal.length ; i++){
    
    if( Number(arrayOriginal[i]) < Number(menorNumero)    ){
        menorNumero = arrayOriginal[i] 
    }
    
    else if (Number(arrayOriginal[i]) > Number(menorNumero) ) {
        maiorNumero = arrayOriginal[i]
    }

}



console.log("Maior número: "+maiorNumero)
console.log("Menor número: "+menorNumero)





// Desafio 1 

const numeroCerto = 37
let chute 
let numeroChute = 0 

console.log("Vamos jogar!")

while (chute != numeroCerto) {
    chute = prompt("Qual o número certo?")
    console.log("O número chutado foi "+chute)
    numeroChute = numeroChute + 1

    if(chute > numeroCerto) {
        console.log("Errou! O número certo é menor!")
    }

    else if (chute < numeroCerto) {
        console.log("Errou! O número certo é maior!")
    }

}
console.log("Parabéns, você acertou! O número de chutes foi "+numeroChute )



// Desafio 2

let sorteia = Math.random()* 100  // Gera um número real entre 0 e 100
sorteia = parseInt(sorteia,10)  // Converte o número para inteiro


console.log("Vamos jogar!")

while (chute != sorteia) {
    chute = prompt("Qual o número certo?")
    console.log("O número chutado foi "+chute)
    numeroChute = numeroChute + 1

    if(chute > sorteia) {
        console.log("Errou! O número certo é menor!")
    }

    else if (chute < sorteia) {
        console.log("Errou! O número certo é maior!")
    }

}
console.log("Parabéns, você acertou! O número de chutes foi "+numeroChute )
