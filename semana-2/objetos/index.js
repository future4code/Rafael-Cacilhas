/* Exercícios de Interpretação:

1 - a)
Matheus Nachtergaele
Virginia Cavendish
Globo 14h

2 - a)
{nome: Juca, idade: 3, raca: SRD}

b)
Define que o objeto atual é igual ao objeto referido depois dos três pontos.

3 - a)
false
none

*/

// Exercício 1
// a)

const pessoa = {
    nome: "Amanda",
    apelidos: ["Mandinha", "Manda", "Ma"]

}

function chamaPessoa(alvo){
    console.log("Eu sou ",alvo.nome+", mas pode me chamar de: ",alvo.apelidos[0]+", ",alvo.apelidos[1]+" ou ",alvo.apelidos[2])
}


chamaPessoa(pessoa)

// b)

const pessoa2 = {
    ...pessoa,
    apelidos: ["Ama","Man man ","Mands"]
}

chamaPessoa(pessoa2)



//Exercício 2
//a)
const funcionario = {
    nome: "Ze" ,
    idade: 25,
    profissao: "estudante"
}

const diretor = {
    nome: "John",
    idade: 33,
    profissao: "CEO"
}



//b)

function imprime(alvo){
    console.log(alvo.nome)
    console.log(alvo.nome.length)
    console.log(alvo.idade)
    console.log(alvo.profissao)
    console.log(alvo.profissao.length)
}

imprime(diretor)

// Exercício 3
// a)
let carrinho = []

const fruta0 = {
    nome: "Uva",
    disponibilidade: true
}

const fruta1 = {
    nome: "Pera",
    disponibilidade: true
}


const fruta2 = {
    nome: "Manga",
    disponibilidade: true
}


function addFruta(alvo){
    carrinho.push(alvo.nome)
}

addFruta(fruta0)
addFruta(fruta1)
addFruta(fruta2)

console.log(carrinho )


//Desafio 1

let userNome = prompt("Digite seu nome")
let userIdade = prompt("Digite sua idade")
let userProf = prompt("Digite sua profissão")

const usuario = {
    nome: userNome,
    idade: userIdade,
    profissao: userProf
}

console.log(usuario)
console.log(typeof usuario)



//Desafio 2

const filme1 = {
    nome: "Rambo",
    anoL: 1980
}

const filme2 = {
    nome: "50 tons de cinza",
    anoL: 2015
}

function comparaFilme(alvo1,alvo2){
    return alvo1.anoL < alvo2.anoL
}

function comparaFilmeIgual(alvo1,alvo2){
    return alvo1.anoL === alvo2.anoL
}

console.log("O primeiro filme foi lançado antes do segundo?", comparaFilme(filme1,filme2))
console.log("O primeiro filme foi lançado no mesmo ano do segundo?", comparaFilmeIgual(filme1,filme2))



//Desafio 3

function estoque(alvo){
    alvo.disponibilidade = !alvo.disponibilidade

}

console.log("Temos ",fruta2.nome+"?",fruta2.disponibilidade)
estoque(fruta2)
console.log("Temos ",fruta2.nome+"?",fruta2.disponibilidade)