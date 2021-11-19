// 2 a)  Entrada: array de numeros. Saída: Array de números


function obterEstatisticas( numeros: Array<number>  ) {

    const numerosOrdenados = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:{maior:number, menor:number, media:number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}


type entrada = {
    numeros: Array<number>
}

const amostraDeIdades: entrada = {
    numeros: [21, 18, 65, 44, 15, 18],
}

console.log(obterEstatisticas(amostraDeIdades.numeros))