/*  Exercício 1

a. undefined
b. null
c. 11
d. 3
e. 3 19 5 6 7 8 9 10 11 12 13
f. 9

    Exercício 2

SUBI NUM ONIBUS EM MIRROCOS 27


//Exercício 1

const nomeDoUsuario = prompt("Digite seu nome")
const emailDoUsuario = prompt("Digite seu e-mail")


//Exercício 2

let comida = ["arroz","feijao","bife","ovo","batata"]

console.log(comida)

console.log("Estas são minhas comidas preferidas:")
console.log(comida[0])
console.log(comida[1])
console.log(comida[2])
console.log(comida[3])
console.log(comida[4])

comidaUsuario = prompt("Digite sua comida preferida")
comida[1] = comidaUsuario

console.log(comida)

 

//Exercício 3

let listaDeTarefas = [prompt("Digite sua primeira tarefa"), prompt("Digite sua segunda tarefa"), prompt("Digite sua terceira tarefa")]

console.log(listaDeTarefas)

let removido = prompt("Digite qual tarefa foi realizada")
listaDeTarefas.splice(removido,1)

console.log(listaDeTarefas)



// Desafio 1

let frase = "Aqui está uma frase"
let fraseSeparada = frase.split(" ")

console.log(fraseSeparada)




//Desafio 2

let array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let index = array.indexOf("Abacaxi")

console.log(index,array.length)

*/