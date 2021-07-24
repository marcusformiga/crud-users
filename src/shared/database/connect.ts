import { createConnection } from "typeorm";

export  const connection = createConnection().then(() =>{
    console.log('Conexão com o banco de dados feita com sucesso')
}).catch((err =>{
    console.log(err)
}))