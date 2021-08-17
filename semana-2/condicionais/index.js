/*  Exercício 1
a) Verifica se o número é par
b) Números pares
c) Números ímpares

    Exercício 2
a) O código define como preço padrão de todas as frutas como sendo R$5 reais e define preços particulares para laranja, maçã, 
uva e pêra.
b) O preço da fruta é R$ 2.25
c) O código seguiria a leitura e definiria que preco = 5. 

    Exercício 3
a) Salva na variável numero o valor digitado pelo usuário.

b) Se numero = 10
Esse número passou no teste 
Erro de compilação pois mensagem não está definido

Se numero = -10
Esse numero passou no teste
Erro de compilação pois mensagem não está definido

c) Sim, pois a variavel mensagem foi definida somente no escopo filho e não pode ser acessada do escopo principal.



*/

// Exercício 1

//a)
const idade = 20
//const idade = prompt("Digite a sua idade")


//b) 
if(typeof(idade) == "number"){


    //c)
    if (idade >= 18){
        console.log("Pode dirigir!")
    }

    else if (idade > 0 && idade < 18){
        console.log("Não pode dirigir!")
    }
    else {
        console.log("Falta nascer ainda :(")
    }
    }



else{
console.log("Favor digitar um numero")
}




// Exercício 2

const periodo = "m"
//const periodo = prompt("Você estuda no período da manhã (M), tarde (T) ou noite (N)?").toUpperCase()

if (periodo === "M") {
    console.log("Bom dia!")
}
else if(periodo === "T"){
    console.log("Boa tarde!")
}
else if (periodo === "N"){
    console.log("Boa noite!")
}
else {
    console.log("Período não identificado. Tente novamente")
}




// Exercício 3

const turno = "m"
//const turno = prompt("Você estuda no período da manhã (M), tarde (T) ou noite (N)?").toUpperCase()

switch(turno){
    case "M":
        console.log("Bom dia!")
        break

    case "T":
        console.log("Boa tarde!")
        break

    case "N":
        console.log("Boa noite!")
        break


}


//Exercício 4

const genero = "fantasia"
const ingresso = 15

let filme = "terror"
//const filme = prompt("Qual o genero do filme?").toLowerCase()

if(filme === genero){

    const preco = Number(prompt("Qual o valor do ingresso?"))

    if(preco <= ingresso){
        console.log("Bom filme!")
    }

    else{
        console.log("Escolha outro filme :(")
    }

}

else{
    console.log("Escolha outro filme :(")
}







//Desafio 1

filme = "terror"

if(filme === genero){

    const preco = 10

    if(preco <= ingresso){

        const lanche = prompt("Vai querer lanche?")
        if(lanche == "nao" ){
            console.log("Bom filme!")
        }
        else{
        console.log("Bom filme!")
        console.log("Aproveite o seu ",lanche+"!")
        }
    }

    else{
        console.log("Escolha outro filme :(")
    }

}

else{
    console.log("Escolha outro filme :(")
}



// Desafio 2



const usuario = "Rafael"
const jogo = "DO"
const etapa = "FI"
const categoria = 2
const quantidade = 10
const dolar = 4.10

let valorUnitario 
let valorTotal 



switch(categoria){
    case 1:
        if(etapa === "SF"){
            valorUnitario = 1320.00
        }

        if(etapa === "DT"){
            valorUnitario = 660.00
            }

        if(etapa === "FI"){
            valorUnitario = 1980.00
        }
        break

    case 2:

        if(etapa === "SF"){
            valorUnitario = 880.00
        }

        if(etapa === "DT"){
            valorUnitario = 440.00
            }

        if(etapa === "FI"){
            valorUnitario = 1320.00
        }
        break

    case 3:

        if(etapa === "SF"){
            valorUnitario = 550.00
        }

        if(etapa === "DT"){
            valorUnitario = 330.00
            }

        if(etapa === "FI"){
            valorUnitario = 880.00
        }
        break


    case 4:
        if(etapa === "SF"){
            valorUnitario = 220.00
        }

        if(etapa === "DT"){
            valorUnitario = 170.00
            }

        if(etapa === "FI"){
            valorUnitario = 330.00
        }
        break




}



if(jogo ==="IN"){
    valorUnitario = valorUnitario *dolar
}


valorTotal = valorUnitario * quantidade

console.log("--- Dados da compra ---")
console.log("Nome do cliente: ",usuario)
console.log("Tipo de jogo: ", jogo)
console.log("Etapa do jogo: ", etapa)
console.log("Categoria: ", categoria)
console.log("Quantidade de ingressos: ", quantidade+" ingressos")
console.log("--- Valores ---")
console.log("Valor do ingresso: R$ " ,valorUnitario)
console.log("Valor total: R$ ", valorTotal)
