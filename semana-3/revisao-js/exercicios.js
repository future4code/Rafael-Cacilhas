// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

let array = [1,2,3,4,5,6]

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}



// EXERCÍCIO 02
function retornaArrayInvertido(array) {

    return array.reverse()
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(compararNumeros)
}

function compararNumeros(a,b) {
    return a-b
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

    let arrayPar = array.filter(
        (item) => {
         return item % 2  === 0
        }
    )
    return arrayPar

}





// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    
    let arrayParElevado = array
    .filter(
        (item) => {
         return item % 2  === 0
        }
    )
    .map(
        (item) => {
            return item**2
        }
    )

    return arrayParElevado
 
}

retornaNumerosParesElevadosADois(array)

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = array[0]
        for (i = 1; i < array.length; i++){
            if (array[i] > maiorNumero) { maiorNumero = array[i]}
        }
    return maiorNumero
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let maior = num1
    let menor = num2

    if(num2 > maior ) { 
        maior = num2
        menor = num1
    }

    let divisivel = false
    if (maior % menor === 0)  {divisivel = true}
  


    let objeto = {
        maiorNumero : maior,
        maiorDivisivelPorMenor: divisivel,
        diferenca: maior - menor
    }

return objeto
}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let pares = []
    for (let i = 0; i < n ; i++){
        pares[i] = 2*i
    }
   return pares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    let triangulo 

    if (ladoA === ladoB && ladoB === ladoC) { triangulo = "Equilátero"}

    if (ladoA === ladoB && ladoB != ladoC) { triangulo = "Isósceles"}
    if (ladoB === ladoC && ladoC != ladoA) { triangulo = "Isósceles"}
    if ( ladoA === ladoC & ladoB != ladoA) { triangulo = "Isósceles"}

    if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA) { triangulo = "Escaleno"}

    return triangulo


}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

    let frase = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
    return frase
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const pessoaAnonima = { 
        ...pessoa,
    nome: "ANÔNIMO"
    }
    return pessoaAnonima
}



// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

    let autorizadas = pessoas
    .filter(
        (item) => {

                return item.altura >= 1.5
        }
        
    )
   
    .filter(
        (item) => {

                return item.idade > 14
        }
        
    )

    .filter(
        (item) => {

                return item.idade < 60
        }
        
    )

    return autorizadas

}






// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

    
    let naoAutorizadas = []
    let contador = 0

    for (i = 0; i < pessoas.length; i++) {
        if( pessoas[i].idade <= 14 || pessoas[i].idade > 60  || pessoas[i].altura < 1.5 ) {naoAutorizadas[contador] = pessoas[i] }
        contador = contador + 1
    }

    

    naoAutorizadas = naoAutorizadas.filter(
        (item) => { 
            return typeof naoAutorizadas != undefined
        }
    )
   

    return naoAutorizadas
  
}



// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let nDividas = 0
    let divida = 0

    contas = contas.map(
        (item) =>{
            divida = 0
            nDividas = item.compras.length

            for (i = 0; i < nDividas; i++) {
                divida = divida + item.compras[i]
            }
           
            item.saldoTotal = item.saldoTotal - divida
            item.compras = []

            return item
        }
    )

    return contas
}



// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {


    let consultaNome = []
    let final= [,,,] 




    for (i = 0; i < consultas.length; i++){
        consultaNome[i] = consultas[i].nome
    }

    consultaNome = consultaNome.sort()


    let consultaOrdem = consultas.map(
        (item) => {
            for (i = 0; i < consultas.length; i++){
                if(item.nome === consultaNome[i]) {
                    console.log(item.nome, consultaNome[i],i)
                    return i
                }
            }
        }
    )

    

        for (i = 0; i < consultas.length; i++) {
            final[consultaOrdem[i]] = consultas[i]
        }


    return final

}





// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

    let consultaNome = []
    let final= [,,,] 




    for (i = 0; i < consultas.length; i++){
        consultaNome[i] = consultas[i].dataDaConsulta
    }
    console.log(consultaNome)

    consultaNome = consultaNome.sort()


    let consultaOrdem = consultas.map(
        (item) => {
            for (i = 0; i < consultas.length; i++){
                if(item.dataDaConsulta === consultaNome[i]) {
                    console.log(item.dataDaConsulta, consultaNome[i],i)
                    return i
                }
            }
        }
    )

    

        for (i = 0; i < consultas.length; i++) {
            final[consultaOrdem[i]] = consultas[i]
        }


    return final
   
}
consultas = [
    { nome: "João", dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", dataDaConsulta: "02/07/2021" },
    { nome: "Paula", dataDaConsulta: "03/11/2021" },
    { nome: "Márcia",  dataDaConsulta: "04/05/2021" }
  ]
  
retornaArrayOrdenadoPorData(consultas)