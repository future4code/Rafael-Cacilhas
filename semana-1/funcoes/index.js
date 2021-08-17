/* Exercício 1
a) 10
50

b) Nada. Ele faria o cálculo, mas não mostraria nada na tela.


Exercício 2 
a) Ela verifica se a palavra "cenoura" está inclusa na string que o usuário digitou, independente de letras maiúsculas.

b) true
true
false


/*Exercício 1
a) */

function minhaFuncao(){
    console.log("Me chammo Rafael, tenho 28 anos, moro em Viçosa e sou estudante")
}

minhaFuncao()

// b)

let nome = "Rafael"
let idade = 28
let cidade = "Viçosa"
let profissao = "estudante"
let texto

function minhaFuncao2(nome,idade,cidade,profissao){
    let resposta = "Me chammo " +nome+ ", tenho " +idade+ " anos, moro em "+cidade+ " e sou " +profissao
    return resposta
}

texto = minhaFuncao2(nome,idade,cidade,profissao)
console.log(texto)


/*Exercício 2
a)  */

function exercicio2a(num1,num2){
    let soma = num1 + num2
    return soma

}

// b)

function exercicio2b(num1,num2){
    return num1 >= num2

}

// c)

function exercicio2c(num1){
    return num1%2 === 0
}

// d)
let variavel = "Hello World!"
function exercicio2d(variavel){
    console.log(variavel.length,variavel.toUpperCase())
}

/* Exercício 3

let a = prompt("Digite o primeiro número")
let b = prompt("Digite o segundo número")

a = Number(a)
b = Number(b)

function somar(a,b){
    return a+b
}



function subtrair(a,b){
    return a-b
}

function multiplicar(a,b){
    return a*b10

}

function dividir(a,b){
    return a/b
}


console.log( "Números inseridos: ",+a+" e", +b    )
console.log("Soma: ", somar(a,b)                )
console.log("Subtração: ",subtrair(a,b)         )
console.log("Multiplicação: ", multiplicar(a,b) )
console.log("Divisão: ", dividir(a,b)           )


*/

//Desafio 2

let c1 = Number(prompt("Digite o valor do primeiro cateto"))
let c2 = Number(prompt("Digite o valor do segundo cateto"))


function hipotenusa(c1,c2){
    let h  = (c1*c1 + c2*c2)**0.5
    return h
}

console.log(hipotenusa(c1,c2))
