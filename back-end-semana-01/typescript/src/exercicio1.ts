// a)

    const minhaString: string = "Olá"

    console.log(minhaString)
    console.log("")
//  const minhaStringNumero: string = 25  //Erro de compilação



// b)

    const meuNumero: number | string = "ei"

    console.log(meuNumero)
    console.log("")


//c) e d)

    enum CORES {
        VERMELHO    =   'Vermelho',
        LARANJA     =   'Laranja',
        AMARELO     =   'Amarelo',
        VERDE       =   'Verde',
        ANIL        =   'Anil',
        AZUL        =   'Azul',
        VIOLETA     =   'Violeta'
    }

    type pessoa = {  
        nome: string, 
        idade: number, 
        corFavorita: string  
    } 

    const rafael:pessoa = {
        nome: 'Rafael', 
        idade: 29, 
        corFavorita: CORES.AZUL  
    }
    

    const maria:pessoa = {
        nome: 'Maria', 
        idade: 22, 
        corFavorita: CORES.ANIL  
    }
    
    const jose:pessoa = {
        nome: 'José', 
        idade: 59, 
        corFavorita: CORES.VERDE  
    }
    
