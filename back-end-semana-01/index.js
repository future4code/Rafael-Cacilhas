//Exercício 1

    if(process.argv[4] === true) {console.log("Envie apenas um argumento")}
    //console.log(   `Ei ${process.argv[2]}! Você tem  ${process.argv[3]} anos.` )

    if(process.argv[4] === false) {console.log("Envie dois argumentos")}
    //console.log(   `Ei ${process.argv[2]}! Você tem  ${Number(process.argv[3]) } anos. Em 7 anos você terá ${Number(process.argv[3]) + 7} anos.`  )

// Exercício 2

/*
    switch(process.argv[2]){
        case    "soma": 
            console.log(    `${process.argv[3]} +  ${process.argv[4]} = ${  Number(process.argv[3]) + Number(process.argv[4])              }  `  )
            break;
        case    "sub":
            console.log(    `${process.argv[3]} -  ${process.argv[4]} = ${  Number(process.argv[3]) - Number(process.argv[4])              }  `  )
            break;

        case    "mult":
            console.log(    `${process.argv[3]} x  ${process.argv[4]} = ${  Number(process.argv[3]) * Number(process.argv[4])              }  `  )
            break;

        case    "div":
            console.log(    `${process.argv[3]} /  ${process.argv[4]} = ${  Number(process.argv[3]) / Number(process.argv[4])              }  `  )
            break;

        default:    
            console.log("Comando não identificado! Use soma, sub, mult ou div")

    }

*/

//Exercício 3

    const tarefas = ['Dobrar roupas']

    tarefas.push(process.argv[2])
    console.log(    '\x1b[36m%s\x1b[0m', tarefas);