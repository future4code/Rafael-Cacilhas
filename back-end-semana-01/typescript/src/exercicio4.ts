type pokemon = {
	name:           string,
    types:          string,
	healthPoints:   number
}

const pokemon1: pokemon = {
    name:           "Charmander",
    types:          "Fire",
    healthPoints:   28
}

const pokemon2: pokemon = {
    name:           "Bulbasaur",
    types:          "Grass/Poison",
    healthPoints:   31
}

const pokemon3: pokemon = {
    name:           "Squirtle",
    types:          "Water",
    healthPoints:   35
}


// a) Rodar o comando tsc 
// b) Não, desde que você edite o arquivo tsconfig.json
// c) Aparentemente sim

// d) O arquivo gerado possui as configurações:

//        "esModuleInterop": true,                 
//        "forceConsistentCasingInFileNames": true  

//    enquanto o dos slides também possuem:

//        "outDir": "./build",        /* Redirect output structure to the directory. */
//        "rootDir": "./src",         /* Specify the root directory of input files. */
//        "removeComments": true,     /* Do not emit comments to output. */
//        "noImplicitAny": true,      /* Raise error on declarations with an implied 'any' type. */