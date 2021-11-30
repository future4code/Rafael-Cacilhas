import express, { Request, Response } from "express";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors());

type User = {
  id    : number;
  name  : string;
  email : string;
  type  : string;
  age   : number;
};

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: "ADMIN",
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: "NORMAL",
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: "NORMAL",
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: "NORMAL",
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: "ADMIN",
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: "ADMIN",
    age: 60,
  },
];


// Exercício 2 - Busca por types. Usei query, mas poderia usar pathparams. Podemos garantir os tipos válidos usando um ENUM
app.get("/users",     (req: Request, res: Response) =>  {
  let codeError: number = 400;

  try {
    const type:  string = req.query.type as string; 
    let usuario: User | undefined = users.find((user) => {
      return user.type === type;
    });

    if (!usuario) {
      codeError = 404;
      throw new Error("User not found");
    }

    res.status(200).send(usuario);

  } catch (error: any) {
    res.status(codeError).send({ message: error.message });
  }
});

//Exercício 3 - Busca por nome por query
app.get("/users",     (req: Request, res: Response) =>  {
  let codeError: number = 400;

  try {
    const name: string = req.query.name as string;
    let usuario: User | undefined = users.find((user) => {
      return user.name === name;
    });

    if (!usuario) {
      codeError = 404;
      throw new Error("User not found");
    }

    res.status(200).send(usuario);

  } catch (error: any) {
    res.status(codeError).send({ message: error.message });
  }
});

//Busca por ID por pathparam
app.get("/users/:id", (req: Request, res: Response) =>  {
  let codeError = 400;

  try {
    const id: number = Number(req.params.id);

    if (isNaN(id)) {
      codeError = 422; //Unprocessable entity
      throw new Error("Invalid value for id. Please send a number.");
    }

    const usuario = users.find((item) => {
      return item.id === id;
    });

    if (!usuario) {
      codeError = 404;
      throw new Error("User not found");
    }

    res.status(200).send(usuario);

  } catch (error: any) {
    res.status(codeError).send({ message: error.message });
  }
});

//Exercício 1 - Buscar todos os usuários com o método GET
app.get("/users",     (req: Request, res: Response) =>  {
  let codeError: number = 400;

  try {

    res.status(200).send(users);

  } catch (error: any) {
    res.status(codeError).send({ message: error.message });
  }
});

//Exercício 4 - Criar novos usuarios. PUT não é adequado pois é usado pra modificar coisas pontuais, não necessariamente precisa de todos os parametros.
app.put("/users",    (req:Request, res: Response)  =>  {
  let errorCode:  number  =   400

  try{
    const id      : number    = Number(req.body.id)    
    const age     : number    = Number(req.body.age)
    const name    : string    = req.body.name
    const email   : string    = req.body.email
    const type    : string    = req.body.type

    if( !id ||  !age || !name ||  !email  || !type   ){
      errorCode = 402
      throw new Error("Please check the body fields!")
    }

    const newUser : User      = {id,age,name,email,type}

    users.push(newUser)
    res
    .status(201)
    .send({message: "User created!"})

  } catch(error:any){
    res
    .status(errorCode)
    .send(error.message)
  }
})


//  Confirmação de que o servidor está funcionando
app.listen(3003, () => {
  console.log("Server iniciado na porta 3003");
});


