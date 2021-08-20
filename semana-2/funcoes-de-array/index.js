/* 

Exercício 1 

nome: "Amanda Rangel", apelido: "Mandi"     0   usuarios
nome: "Laís Petra", apelido: "Laura"        1   usuarios
nome: "Letícia Chijo", apelido: "Chijo"     2   usuarios

onde usuarios é o array inteiro, em cada linha



Exercício 2

Amanda Rangel
Laís Petra
Letícia Chijo


Exercício 3

nome: "Amanda Rangel", apelido: "Mandi"
nome: "Laís Petra", apelido: "Laura"

*/


// Exercício 1









const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]





 // a)

 const nomePet = pets.map(   
     (item) => {
         return item.nome
    }
)

//console.log(nomePet)

// b) 

let salsichas = pets.filter(   
    (item) => {
        return item.raca === "Salsicha"
    }                            
)

//console.log(salsichas)


// c)

let poodles = pets

    .filter (  (item) => 
        {
            return item.raca === "Poodle"
        }                            
    )

    .map    ( (item) => 
        {
            return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
        }
    )

//console.log(poodles)

function extrairNome(obj){
    return obj.nome
  }  

  const enviarMsgPoodles = pets.map((item, index, array) => {
    return item.raca === "Poodle"
  })

  //console.log(enviarMsgPoodles)


//Exercício 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


 // a)

 let nomeProduto = produtos.map(
     (item) => {
         return item.nome
     }
 )

 //console.log(nomeProduto)


 // b) 

 let descontos = produtos.map(
     (item) => {
         return [item.nome, ( Number(item.preco)*0.95).toFixed(2)  ]
     }
 )

//console.log(descontos)


// c)

let bebidas = produtos.filter(
    (item) =>{

        return item.categoria === "Bebidas"
    }
)

//console.log(bebidas)


// d)

let ype = produtos.filter(
    (item) => {
        return item.nome.includes("Ypê")
    }
)

//console.log(ype)


// e)

let anuncio = ype.map(
    (item) => {
        return `Compre ${item.nome} por R$ ${item.preco.toFixed(2)}`
    }
)

//console.log(anuncio)


//Desafio 1

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
    { nome: "Psyduck", tipo: "grama" },
 ]

 // a) 

 let nomesOrganizados = pokemons.sort()
 //console.log(nomesOrganizados)

 // b)

 let resultado = pokemons.map(
     (item, index,array) => {
        return item.tipo
         
     }
 )


 resultado = resultado.sort()                               // garante que o resultado está em ordem
 let parametro = 0

for (let i = 1; i < resultado.length; i++){

    if(resultado[i] === resultado[parametro]) {         // Caso o tipo seja igual à um tipo já visto anteriormente 
        resultado[i] = 0                                // Fazemos o item ser igual a 0
    }

    else {
        parametro =   i                                  // Se for diferente, passamos a olhar um novo tipo
    }

}

resultado = resultado.filter(
    (item) => {
        return typeof item === "string"                 // Valores numéricos, que é o 0, são descartados
    }
)

 //console.log(resultado)