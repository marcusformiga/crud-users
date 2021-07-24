# crud-users

## Start:
para rodar este projeto basta clonar este repositório e na pasta raiz instalar as dependencias com o comando npm install ou yarn install
para startar o servidor no localhost basta digitar no terminal na pasta raiz yarn dev
para rodar as migrations basta digitar o comanddo yarn typeorm migration:run
Mini-documentação da api

Endpoints GET - localhost:3002/users - PARAMETROS (Não) => exibe a lista com todos os usuarios Resposta de sucesso(status 200)
```
[
    {
        "id": "8becde76-e0dd-42b3-85e3-d8da23aca49f",
        "email": "teste@mail.com",
        "firstname": "testedenome",
        "lastname": "testedelastname",
        "phonenumber": 235652721,
        "created_at": "2021-07-24T17:03:09.000Z",
        "updated_at": "2021-07-24T17:03:09.000Z"
    },
    {
        "id": "37f61ce2-6428-47c5-afc2-c151a0a38f6a",
        "email": "teste2@mail.com",
        "firstname": "teste2denome",
        "lastname": "teste2delastname",
        "phonenumber": 711235314241,
        "created_at": "2021-07-24T19:13:03.000Z",
        "updated_at": "2021-07-24T19:13:03.000Z"
    }
]
```

POST - localhost:3002/users - PARAMETROS body (email, firstname, lastname, phonenumber) => rota para criar um usuario Respota de sucesso (status 201)
```
{
    "email": "teste3@mail.com",
    "firstname": "teste3denome",
    "lastname": "teste3delastname",
    "phonenumber": 7112235314241,
    "id": "ca44a8e3-4a98-4812-b690-19835649d176",
    "created_at": "2021-07-24T19:16:06.000Z",
    "updated_at": "2021-07-24T19:16:06.000Z"
}
```
Resposta de fracasso (não pode cadastrar um usario com email que já exista no banco de dados, status 400)
```
{
    "status": "error",
    "message": "Usuário com email teste3@mail.com já está cadastrado"
}
```
DELETE - localhost:3002/users/id PARAMETRO route (id) => deleta um usuario com id informado Resposta de sucesso (status 200)
```
"8becde76-e0dd-42b3-85e3-d8da23aca49f"
```
Resposta de fracasso (status 404)
```
{
    "status": "error",
    "message": "Usuário com id 8becde76-e0dd-42b3-85e3-d8da23aca49f22 não encontrado, portanto não pode ser deletado"
}
```


