/* Exercícios de interpretação:

Exercício 1: 
10
10 5

Exercício 2:
10 10 10

Exercício 3:
p = horasDiario
t = salarioDiario

*/




/* Exercícios de escrita: */

let nome;
let idade;


console.log(typeof(nome), typeof(idade)        )

// O console retorna underfined porque nenhum valor foi atribuido

nome = "Rafael";
idade = 28;

console.log(typeof(nome), typeof(idade)        )
// O console agora retorna "string" e "number", pois atribuimos uma string e um número às variáveis

console.log("Olá " +nome," você tem "+idade, " anos." )



/* Exercício 2*/

let pergunta1;
let pergunta2;
let pergunta3;

let resposta1;
let resposta2;
let resposta3;

pergunta1 = "Você tomou banho hoje?"
pergunta2 = "Você é maior de idade?"
pergunta3 = "Você é aluno da Labenu?"

resposta1 = prompt(pergunta1);
resposta2 = prompt(pergunta2);
resposta3 = prompt(pergunta3);

console.log(pergunta1, resposta1)
console.log(pergunta2, resposta2)
console.log(pergunta3, resposta3)



/* Exercício 3 */


let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores
let temp = a;

a = b;
b = temp;

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10




/*Desafio*/


let numero1 = prompt("Digite o primeiro número")
let numero2 = prompt("Digite o segundo número")



let x = Number(numero1) + Number(numero2)
let y = Number(numero1) * Number(numero2)

console.log("Soma: "+x,"Produto: "+y)